import { useSession } from "next-auth/react";
import Link from "next/link";
import { User } from "talkjs/all.js";
import ErrorPage from "../../components/Utils/Error";
import LoadingTemplate from "../../components/Utils/LoadingTemplate";
import { env } from "../../env/client.mjs";
import { api } from "../../utils/api";
function Profile() {
  const { data: session, status } = useSession();
  const id = session?.user?.id as string;
  const {
    data: user,
    isLoading,
    isError,
  } = api.user.getUserInfo.useQuery({ id });
  if (isLoading) {
    return <LoadingTemplate />;
  }
  if (isError) {
    return <ErrorPage />;
  }
  return (
    <>
      {status === "loading" && (
        <h2 className="flex items-center justify-center">
          <LoadingTemplate />
        </h2>
      )}
      {status === "unauthenticated" && (
        <h1>
          <Link href="/account/login" className="flex text-center">
            Login to continue
          </Link>
        </h1>
      )}
      {session && status === "authenticated" && (
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
                    {`${user?.firstName as string} ${user?.lastName as string}`}
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
                    <Link href={`${env.NEXT_PUBLIC_URL}/user/profile/${id}`}>
                      Click here
                    </Link>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    My Blogs
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <Link href={`${env.NEXT_PUBLIC_URL}/blogs/pt/userBlogs`}>
                      Click here
                    </Link>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Create a Project
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <Link
                      href={`${env.NEXT_PUBLIC_URL}/profile/projects/createProject`}
                    >
                      Click here
                    </Link>
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">About</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {user?.about}
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

export default Profile;
