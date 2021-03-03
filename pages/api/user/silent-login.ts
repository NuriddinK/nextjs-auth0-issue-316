import { handleLogin, withApiAuthRequired } from "@auth0/nextjs-auth0";

const profile = async (req, res) => {
    await handleLogin(req, res, {
        authorizationParams: {
            prompt: "none",
        },
    });
};

export default withApiAuthRequired(profile);
