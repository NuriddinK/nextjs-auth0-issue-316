import { handleAuth, handleCallback } from "@auth0/nextjs-auth0";
import { transformMetadata } from "../../../utils/use-auth0";

const afterCallback = async (req, res, session) => {
    const userProfile = await transformMetadata(session.user);
    session.user = userProfile;
    return session;
};

export default handleAuth({
    async callback(req, res) {
        try {
            await handleCallback(req, res, { afterCallback });
        } catch (err) {
            const status = err.status ? err.status : 500;
            res.status(status).end(err.message);
        }
    },
});
