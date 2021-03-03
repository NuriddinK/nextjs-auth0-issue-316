import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";

const profile = async (req, res) => {
    const { user } = await getSession(req, res);
    res.json({ user });
};

export default withApiAuthRequired(profile);
