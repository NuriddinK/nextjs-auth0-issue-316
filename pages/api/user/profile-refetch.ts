import { handleProfile, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { transformMetadata } from "../../../utils/use-auth0";

const afterRefetch = async (req, res, session) => {
    const userProfile = await transformMetadata(session.user);
    session.user = userProfile;
    return session;
};

const profile = async (req, res) => {
    await handleProfile(req, res, {
        afterRefetch: afterRefetch,
        refetch: true,
    });
};

export default withApiAuthRequired(profile);
