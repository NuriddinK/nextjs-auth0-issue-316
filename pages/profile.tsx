import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import Layout from "../components/layout";

const Profile: React.FC = () => {
  const { user, error, isLoading } = useUser();

  return (
    <Layout>
      <h1>Profile</h1>

      {isLoading && <p>Loading profile...</p>}

      {error && (
        <>
          <h4>Error</h4>
          <pre>{error.message}</pre>
        </>
      )}

      {user && (
        <>
          <h4>Profile</h4>
          <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
};

export default withPageAuthRequired(Profile);
