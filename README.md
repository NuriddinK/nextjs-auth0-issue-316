# Steps to reproduce

**Step 1.** Setup Auth0
- Allowed Callback URLs: `http://127.0.0.1:3000/api/auth/callback`
- Allowed Logout URLs: `http://127.0.0.1:3000/`
- Allow Skipping User Consent (API): `true`
- OIDC Conformant: `true`

**Step 2.** Create .env file and file it according the .env.template

**Step 3.** Auth Pipeline -> Rules -> Create (empty) rule

```
function (user, context, callback) {
  const namespace = 'YOUR_NAMESPACE_URL'; // Should be the same as in the .env

  const userType = context.stats && context.stats.loginsCount === 1 ? 'new' : 'existing';
	const acceptedAgreement = user.app_metadata ? user.app_metadata.acceptedAgreement : false;
  const themeColor = user.user_metadata ? user.user_metadata.favorite_color : 'blue';

  context.idToken[`${namespace}metadata`] = { 
    userType, 
    acceptedAgreement,
    themeColor
  };

  return callback(null, user, context);
}
```

**Step 4.** Sign user in, then on the Auth0 Dashboard change the user's `app_metadata` to:

```
{
    "acceptedAgreement": true
}
```

**Step 5.** Navigate to *JSON profile (refetch)* on the navbar of your app, here's the issue, `acceptedAgreement` did not update.
