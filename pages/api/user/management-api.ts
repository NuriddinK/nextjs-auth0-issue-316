import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import useMetadata from "../../../utils/use-auth0";

const user = async (req, res) => {
    try {
        const { user, accessToken } = await getSession(req, res);
        const metadata = await useMetadata(user.sub, accessToken);
        res.status(200).send(metadata);
    } catch (err) {
        const status = err.status ? err.status : 500;
        res.status(status).send(err.message);
    }
};

export default withApiAuthRequired(user);
