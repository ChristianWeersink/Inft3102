# Lab 3 
## Serverless Functions and Mail Services
### Christian Weersink

In this lab I will look at 3 hosting and serverless function options, as well as 3 mail services that can be used to automatically send emails using the serverless functions.

## Serverless Function Providers

### Vercel
 - Great support with Next.js
 - Easy to set up
 - Github Support
 - Custom Domains
 - Per developer payment plans
 - Free tier available

### Netlify
 - Easy to use user interface
 - Multiple language support for serverless functions
 - Form detection to manage forms on Netlify
 - Custom Domains
 - Visual Editor with CMS support

### AWS Lambda
 - Pay per use
 - Free tier for 1 year including some other aws services
 - Widely used and trusted
 - Wide variety of other cloud services available with AWS. You don't need to go anywhere else
 - 1 million requests per month on free tier

## Mail Services

### Mailgun
 - Easy to use
 - Developer friendly
 - Free access can only send to manually entered and verified emails
 - Allows custom DNS and Domain
 - API or SMTP 
 - Detailed logging
 - Flexible plans for enterprise scaling

### Sendgrid
 - Free tier with 100 emails per day
 - Paid Lowest paid plan $20/month with no additional dev slots, the lowest tier that provides access for more devs is the pro tier, $89/month which provides access for 1000 devs. No great option for small teams
 - Drag and drop email editor
 - Provides marketing email support

### MailerSend
 - Integration with a wide variety of libraries
 - Email verification
 - SMS support for sending text messages
 - 3000 Free emails per month
 - Pay as you go after 3000 emails at $1.00/1000 emails

## My Choice
For my project, I decided to use Netlify for my serverless function and hosting, due to it robust free tier and ease of use. For my mail service I am using Mailgun because it provides everything that I need for the scale of this project. 

### Resources
- [Vercel](https://vercel.com/home)
- [Netlify](https://app.netlify.com/sites/christianweersinkframeworks/forms)
- [SendGrid](https://sendgrid.com/en-us/pricing?tab=1_1)
- [AWS Lambda](https://aws.amazon.com/lambda/)
- [MailerSend](https://developers.mailersend.com/)