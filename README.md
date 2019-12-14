# Scully

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

The best way to build the fastest Angular apps. Scully is a static site generator for Angular projects looking to embrace the JAMStack.

- [Getting Started](docs/getting-started.md)
- [Full Documentation](docs/scully.md)

# What is Scully?
Scully pre-renders each page in your app to plain HTML & CSS. To do this, Scully uses machine learning techniques to find 
all of the routes in your project. Scully then visits each route, rendering the view and saving it to an HTML file.

You can then ship all of those HTML files to production. Each view in your app can now be delivered to your users in just 
a few KBs, as opposed to the hundreds/thousands of KBs require to download your entire Angular app. 

Your app appears INSTANTLY on any device (including mobile 3G). 

Once the fully-rendered HTML arrives/appears on the user's view, your Angular app will them load and bootstrap ontop of
the existing view. This means that Scully gives you the best of both worlds:

1. The ability to pre-render your entire app to the most base form of HTML & CSS. 
2. The ability to still have a full powered SPA written in Angular. 

When your app is pre-rendered, users no longer wait until all the JavaScript has downloaded, parsed and executed before 
they can see and interact with your website. They can immediately begin to see and interact with the page. When your page
is IMMEDIATELY available, you will have less abandoned sessions and a much higher conversion rate on our website. 

This also means that you can have a backend that you don't ship to production. Because the view is pre-rendered and the
data is fetched at build time, all views that can run without the backend in prod CAN run without the backend in prod. 
The security an cost implications to that fact can be mind blowing when you think about them. 

For those wanting to know more about this process, please read the [Getting Started](docs/getting-started.md) guide. For
those who want to know more about the theory behind pre-rendering JavaScript SPAs, our friends at [Netlify](https://netlify.com)
wrote a [free book about the JAMStack](https://www.netlify.com/pdf/oreilly-modern-web-development-on-the-jamstack.pdf). 
Check that out today. 

## Core Team

| Aaron Frost                                                               | Sander Elias                                                                | Jorge Cano                                                                  | Andres Villanueva                                                                |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------|
| ![Aaron Frost](https://avatars0.githubusercontent.com/u/662832?s=120&v=4&1) | ![Sander Elias](https://avatars3.githubusercontent.com/u/1249083?s=120&v=4) | ![Jorge Cano](https://avatars3.githubusercontent.com/u/5982204?s=120&v=4)   | ![Andres Villanueva](https://avatars0.githubusercontent.com/u/1209238?s=120&v=4) |
| [aaronfrost](https://github.com/aaronfrost)                               | [SanderElias](https://github.com/SanderElias)                               | [jorgeucano](https://github.com/jorgeucano)                                 | [villanuevand](https://github.com/villanuevand)                                  |


#### Created by 
![logo Hero Devs](assets/hero-devs-logo-80x80.jpg)

***HeroDevs. LLC***

