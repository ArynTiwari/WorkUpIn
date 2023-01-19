import { useRouter } from "next/router";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from "react";
import Image from "next/image";
export const Feed = ({ pageNumber, articles }:any) => {
    const router = useRouter();
    return (
        <>
            <div className="flex flex-col">
                {articles.map((article: { url: string; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; urlToImage: string | undefined; }, index: Key | null | undefined) => (
                    <div key={index} className='flex flex-col my-4'>
                        <h1 onClick={() => (window.location.href = article.url)} className="cursor-pointer  font-semibold text:xl  md:text-2xl">{article.title}</h1>
                        <p>{article.description}</p>
                        <div className="flex mx-auto">
                        {!!article.urlToImage && <img src={article.urlToImage} className='justify-end max-h-[600px] max-w-[600px]' alt="news" height={600} width={600} />}
                        </div>
                        <hr className="" />
                    </div>
                ))}
                <div className="flex bg-slate-50 rounded-full w-[400px] justify-between items-center mx-auto my-8">
                  <div className="flex gap-8 justify-around">
                  <div onClick={() => {
                            if (pageNumber > 1) {
                                router.push(`/news/${pageNumber-1}`).then(()=>window.scrollTo(0,0));
                            }}}
                        className= { `${pageNumber === 1 ? 'cursor-not-allowed text-gray-500' : 'flex cursor-pointer'}`} >
                        Previous Page
                    </div>
                    <div>{pageNumber}</div>
                    <div onClick={() => {
                            if (pageNumber < 5) {
                                router.push(`/news/${pageNumber+1}`).then(()=>window.scrollTo(0,0));
                            }}}
                        className= { `${pageNumber === 5 ? 'cursor-not-allowed text-gray-500' : 'flex cursor-pointer'} justify-end`} >
                        Next Page
                    </div>
                  </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(pageContext: { query: { news: any; }; }) {
    const pageNumber = pageContext.query.news;

    if (!pageNumber || pageNumber < 1 || pageNumber > 10) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            }
        }
    }
    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,

        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_NEWS_API!}`,
            },
        }
    );
    const apiJson = await apiResponse.json();
    const { articles } = apiJson;
    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    }


}

export default Feed;



