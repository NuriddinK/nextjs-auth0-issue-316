const useMetadata = async (sub, accessToken) => {
    const endpoint = `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${encodeURIComponent(sub)}`;

    const response = await fetch(endpoint, { 
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        }
    });
    const metadata = await response.json();

    return metadata;
};

export const transformMetadata = async (user) => {
    const namespace = process.env.AUTH0_NAMESPACE;
    const metadataKey = namespace + 'metadata';
    const metadata = {};

    for (const [key, value] of Object.entries(user[metadataKey])) {
        metadata[key] = value;
    }

    user['metadata'] = metadata;
    delete user[metadataKey];
    return user;
};

export default useMetadata;