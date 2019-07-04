# CMS-Solution

## Current Implementation
We're currently using graph-cms to manage site content
this allow us to have a centralized place to make updates
and changes to content but decouples content from our code

https://netlifycms.org/

Netlify allows you to add a CMS to your Gatsby sites without having to
worry about hosting, security, or performance. They have an intuitive UI
where we can login and edit our site content.

Our site will be hosted on netlify so for ease of integration we will use their
CMS solution


## How The Site Gets Updated
Gatsby Generates Static Files. So we will need a webhook to be triggered on
content changes to rebuild the site and ship these updates 🚢
