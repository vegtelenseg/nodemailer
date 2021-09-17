# nodemailer

# Get started

* Create a .env file in the root folder of the project
* Head over to aws and sign in as an IAM user and create aws secret key and access key (You can have a look [here](https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/) if not familiar about how to do that
* Once you have your access key and secret key, copy them into the .env file

### .env file **must** look like this
 
 ```
  AWS_SECRET_ACCESS_KEY=<YOUR OWN KEY HERE FROM AWS>
  AWS_ACCESS_KEY_ID=<YOUR OWN ID HERE FROM AWS>
  AWS_REGION=eu-west-2
 ```
 
 ### Running the project
 
 ```
  // with yarn 
  yarn start
 
  // with npm 
  npm run start
 ```


# Note
 The emails that you will test this with have to be verified in your AWS account. You can look at how to do that over [here](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses-procedure.html)
