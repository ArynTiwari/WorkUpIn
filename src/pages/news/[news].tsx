import { useRouter } from "next/router";
import { env } from "../../env/server.mjs";
import Image from "next/image";
import { createProxySSGHelpers } from '@trpc/react-query/ssg';
import { createTRPCContext } from "../../server/api/trpc.js"; 
import { appRouter } from "../../server/api/root.js";
import superjson from 'superjson';
type CreateContextOptions = {
  session: Session | null;
};
import { useSession } from "next-auth/react/index.js";
const {data:session} = useSession()
const ssg = createProxySSGHelpers({
  router: appRouter,
  ctx: await createTRPCContext(session),
  transformer: superjson, // optional - adds superjson serialization
});
  return (
    <>
      <div className="flex flex-col">
        {paths.map(
          (article: {
            url: string;
            title:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
            description:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
            urlToImage: string | undefined;
          }) => (
            <div key={article.url} className="my-4 flex flex-col">
              <h1
                onClick={() => (window.location.href = article.url)}
                className="text:xl  cursor-pointer font-semibold  md:text-2xl"
              >
                {article.title}
              </h1>
              <p>{article.description}</p>
              <div className="mx-auto flex">
                {!!article.urlToImage && (
                  <Image
                    src={article.urlToImage}
                    className="max-h-[600px] max-w-[600px] justify-end"
                    alt="news"
                    height={600}
                    width={600}
                  />
                )}
              </div>
              <hr className="" />
            </div>
          )
        )}
        <div className="mx-auto my-8 flex w-[400px] items-center justify-between rounded-full bg-slate-50">
          <div className="flex justify-around gap-8">
            <div
              onClick={() => {
                if (page > 1) {
                  void router
                    .push(`/news/${page - 1}`)
                    .then(() => window.scrollTo(0, 0));
                }
              }}
              className={`${
                page === 1
                  ? "cursor-not-allowed text-gray-500"
                  : "flex cursor-pointer"
              }`}
            >
              Previous Page
            </div>
            <div>{page}</div>
            <div
              onClick={() => {
                if (page < 5) {
                  void router
                    .push(`/news/${page + 1}`)
                    .then(() => window.scrollTo(0, 0));
                }
              }}
              className={`${
                page === 5
                  ? "cursor-not-allowed text-gray-500"
                  : "flex cursor-pointer"
              } justify-end`}
            >
              Next Page
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import { createProxySSGHelpers } from '@trpc/react-query/ssg';

// import { createContext } from 'server/context';
// import superjson from 'superjson';

// export async function getServerSideProps(
//   context: GetServerSidePropsContext<{ id: string }>,
// ) {
//   const ssg = createProxySSGHelpers({
//     router: appRouter,
//     ctx: await createContext(),
//     transformer: superjson,
//   });
//   const id = context.params?.id as string;
//   /*
//    * Prefetching the `post.byId` query here.
//    * `prefetch` does not return the result and never throws - if you need that behavior, use `fetch` instead.
//    */
//   await ssg.post.byId.prefetch({ id });
//   // Make sure to return { props: { trpcState: ssg.dehydrate() } }
//   return {
//     props: {
//       trpcState: ssg.dehydrate(),
//       id,
//     },
//   };
// }