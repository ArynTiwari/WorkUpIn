import { getSession, GetSessionParams, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import Blog from "../../components/Blog/Blog";
import PaperClipIcon from "@heroicons/react/24/outline/PaperClipIcon";
function Profile(logged: unknown) {
  const { data: session, status } = useSession();
  return (
    <>
      {status === "loading" && (
        <h2 className="flex items-center justify-center">Loading</h2>
      )}
      {status === "unauthenticated" && (
        <h1>
          <Link href="/account/login" className="flex text-center">
            Login to continue
          </Link>
        </h1>
      )}
      {session && status === "authenticated" && logged && (
        <>
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                User Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details .
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {session.user?.name}
                  </dd>
                </div>
                {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Application for
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    Backend Developer
                  </dd>
                </div> */}
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {session.user?.email}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Public Profile
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <Link href={''}>Click here</Link>
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">About</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                    incididunt cillum culpa consequat. Excepteur qui ipsum
                    aliquip consequat sint. Sit id mollit nulla mollit nostrud
                    in ea officia proident. Irure nostrud pariatur mollit ad
                    adipisicing reprehenderit deserunt qui eu.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  const logged = await getSession(context);
  const email = logged?.user?.email;
  if (email == process.env.ADMIN_EMAIL) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }
  if (!logged) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { logged },
  };
}
export default Profile;
