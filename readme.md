# Deploy changes to Auth0 with Github Actions
![Documentations](https://marketplace.auth0.com/integrations/github-actions)

## Export

Export data auth0 to your local need to export auth0 client secret
- install auth0 cli
```npm install auth0-deploy-cli```

- export auth0 client secret
```bash
export {ENV}_AUTH0_CLIENT_SECRET={YOUR AUTH0 CLIENT SECRET}
```

- running scripts
```npm run export-{ENV}```
> the scripts you must see to `package.json`

## Github Actions
- Set up github actions secret, the secret to be registered in your repository with the following names : `{ENV}_AUTH0_CLIENT_SECRET`
