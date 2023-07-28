/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import type { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { env } from "../../env/client.mjs";
interface INewsAPI {
  status: string;
  totalResults: number;
  articles: [
    {
      source: {
        id: string | null;
        name: string;
      };
      author: string;
      title: string;
      description: string;
      url: string;
      urlToImage: string;
      publishedAt: string;
      content: string;
    }
  ];
}
interface Props {
  articles: INewsAPI["articles"];
  pageNumber: number;
}
export async function getStaticPaths() {
  const res = await axios.get<INewsAPI>(
    `https://newsapi.org/v2/top-headlines?country=in&pageSize=5page=${1}`,
    {
      headers: {
        Authorization: `Bearer ${env.NEXT_PUBLIC_NEWS_API}`,
      },
    }
  );
  const totalPages = Math.ceil(res.data.totalResults / 5);
  const paths = Array.from({ length: totalPages }, (_, i) => `/news/${i + 1}`);

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageNumber = Number(params?.news);
  console.log(params?.news);
  const res = await axios.get<INewsAPI>(
    `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${env.NEXT_PUBLIC_NEWS_API}`,
      },
    }
  );

  return {
    props: {
      articles: res.data.articles,
      pageNumber,
    },
  };
};

export default function Home({ articles, pageNumber }: Props) {
  const router = useRouter();

  return (

    <div className="container  items-center mx-auto flex flex-col">
      {articles.map((article) => (
        <div key={article.title} className="flex flex-col container">
          <h1
            onClick={() => (window.location.href = article.url)}
            className="text-xl cursor-pointer font-semibold md:text-2xl text-center"
          >
            {article.title}
          </h1>
          <p className="">{article.description}</p>
          <div className="mx-auto flex justify-center md:justify-end">
            {!!article.urlToImage && (
              <img
                src={article.urlToImage}
                className="max-h-[400px] max-w-[400px]"
                alt="news"
             
              />
            )}
          </div>
          <hr className="m-4" />
        </div>
      ))}
      <div className="p-4 flex flex-col w-full items-center justify-between rounded-full">
        <div className="flex justify-center md:justify-start gap-4">
          <div
            onClick={() => {
              if (pageNumber > 1) {
                void router.push(`/news/${pageNumber - 1}`).then(() => window.scrollTo(0, 0));
              }
            }}
            className={`${pageNumber === 1 ? "cursor-not-allowed text-gray-500" : "cursor-pointer"
              }`}
          >
            Previous
          </div>
          <div>{pageNumber}</div>
          <div
            onClick={() => {
              if (pageNumber < 5) {
                void router.push(`/news/${pageNumber + 1}`).then(() => window.scrollTo(0, 0));
              }
            }}
            className={`${pageNumber === 5 ? "cursor-not-allowed text-gray-500" : "cursor-pointer"
              }`}
          >
            Next 
          </div>
        </div>
      </div>
    </div>


  );
}
