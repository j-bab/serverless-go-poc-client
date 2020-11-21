# Serverless API client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Configuration and getting started

If you haven't already, first [deploy your infrastructure](https://github.com/j-bab/serverless-go-poc):

in package.json replace the following placeholders:  
YOUR_BUCKET_NAME - replace this with the name of the s3 bucket you wish to deploy to
YOUR_CF_DIST_ID  .  replace this with the cloudFront distribution ID that this will be served over

run `npm install` to install the required dependencies.


## Deployment

In the project directory, you can run:

### `npm run deploy`

Your app will be built, synced to s3, and finally the cloudFront distribution cache will be invalidated.

## Troubleshooting

If, quickly after deploying the infrastructure, you navigate to the domain of your cloudFront distribution it may redirect to the s3 buckets url.  

This is a temporary dns issue on a newly built distribution and should resolve itself with time.  
If, after a while this is still the case, try invalidating the cf distro or redeploying this as the redirect can sometimes be cached.