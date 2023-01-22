import React from "react";
import { useRouter } from "next/router";
import PublicProfile from "../../../components/User/PublicProfile";
const Profile = () => {
  const router = useRouter();
  const id = router.query.id;
  return <PublicProfile id={id as string} />;
};

export default Profile;
