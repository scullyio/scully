# Scully

[![GitHub](https://img.shields.io/github/license/scullyio/scully)](https://github.com/scullyio/scully/blob/master/LICENSE)
[![Gitter](https://img.shields.io/gitter/room/scullyio/community)](https://gitter.im/scullyio/community)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![CLA assistant](https://cla-assistant.io/readme/badge/scullyio/scully)](https://cla-assistant.io/scullyio/scully)


The best way to build the fastest Angular apps. Scully is a static site generator for Angular projects looking to embrace the JAMStack.

- [Getting Started](docs/getting-started.md)
- [Full Documentation](docs/scully.md)
- [Live Demo](https://www.youtube.com/watch?v=Sh37rIUL-d4) (_from Dec 16, 2019_)
- [Contribution Guideline](CONTRIBUTING.md)

# What is Scully?
Scully pre-renders each page in your app to plain HTML & CSS. To do this, Scully uses machine learning techniques to find 
all of the routes in your project. Scully then visits each route, rendering the view and saving it to an HTML file.

You can then ship all of those HTML files to production. Each view in your app can now be delivered to your users in just 
a few KBs, as opposed to the hundreds/thousands of KBs require to download your entire Angular app. 

Your app appears INSTANTLY on any device (including mobile 3G). 

Once the fully-rendered HTML arrives/appears on the user's view, your Angular app will then load and bootstrap on top of
the existing view. This means that Scully gives you the best of both worlds:

1. The ability to pre-render your entire app to the most base form of HTML & CSS. 
2. The ability to still have a full powered SPA written in Angular. 

When your app is pre-rendered, users no longer wait until all the JavaScript has downloaded, parsed and executed before 
they can see and interact with your website. They can immediately begin to see and interact with the page. When your page
is IMMEDIATELY available, you will have less abandoned sessions and a much higher conversion rate on your website. 

This also means that you may not need to ship your backend to production. Because the view is pre-rendered and the
data is fetched at build time, all views that can run without the backend in prod CAN run without the backend in prod. 
The security and cost implications to that fact can be mind blowing when you think about them. 

For those wanting to know more about this process, please read the [Getting Started](docs/getting-started.md) guide. For
those who want to know more about the theory behind pre-rendering JavaScript SPAs, our friends at [Netlify](https://netlify.com)
wrote a [free book about the JAMStack](https://www.netlify.com/pdf/oreilly-modern-web-development-on-the-jamstack.pdf). 
Check that out today. 

#### GET A HOLD OF US 24/7
The Scully core team wants to help you any time you need us. We don’t want you to get stuck without help. To make this possible, you have the following ways to get a hold of our team:

1. The ScullyIO [Gitter channel](https://gitter.im/scullyio/community) is available to the public, and you can chat questions to us in real time, one of the core team (or the community members) will be there to reply to it.

1. Each Tuesday we have Office Hours at noon MDT. [You can join](https://meet.google.com/_meet/vcm-wekz-hsx) the entire team and ask your questions.

1. Our DMs are open on [Twitter](https://twitter.com/scullyio). Feel free to reach out to us on Twitter. 


## Core Team

| Aaron Frost                                                               | Sander Elias                                                                | Jorge Cano                                                                  | Andres Villanueva                                                                |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------|
| ![Aaron Frost](https://avatars0.githubusercontent.com/u/662832?s=120&v=4&1) | ![Sander Elias](https://avatars3.githubusercontent.com/u/1249083?s=120&v=4) | ![Jorge Cano](https://avatars3.githubusercontent.com/u/5982204?s=120&v=4)   | ![Andres Villanueva](https://avatars0.githubusercontent.com/u/1209238?s=120&v=4) |
| [aaronfrost](https://github.com/aaronfrost)                               | [SanderElias](https://github.com/SanderElias)                               | [jorgeucano](https://github.com/jorgeucano)                                 | [villanuevand](https://github.com/villanuevand)                                  |


#### Created by 
![logo Hero Devs](assets/hero-devs-logo-80x80.jpg)

***HeroDevs. LLC***

