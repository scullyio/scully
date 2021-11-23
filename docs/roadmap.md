---
title: Scully roadmap
published: true
lang: en
position: 5
---

# Scully roadmap.

In here we are listing the things we would like to implement in Scully.
We are giving no time-estimates as we are deppening on available time of contributors and/or sponsors.
There are an couple of new optional render plugins in the list. Those will all be optional, the current way of working will keep on existing. We plan on changing the default renderer to the playwright version  when we have enough feedback and testing done. Even when this happens, you can still keep on using the system that is now in place, and the new default will only be activated in new projects.

- release V2 of Scully
  - ~~Deprecate support for Angular before version 12.~~
  - ~~V2 will require Angular v12 and up~~
  - ~~V2 will switch over to the new Ivy library structure soon~~
  - V1 will remain available for Angular versions 9/10/11
  - support for versions before V9 is completely dropped.
- Better control over server-start-stop.
  - We have had some reports of stalling in CI/CD, an this seems to be the root cause of this issue.
- optional Renderer build on top of [platform-server](https://angular.io/api/platform-server)
  - Scully is now using Puppeteer to render the resulting pages. This approach will be using the platform server. While this puts some additional demands on the application (similar to Angular Universal, which uses the same engine), it can render pages _much_ faster. (It doesn't have to start a browser, navigate to a page and so on)
- optional Render build on top of [Playwright](https://github.com/microsoft/playwright)
  - This is very similar to Puppeteer, but supports more browsers, and works on M1 chips.
- optional Platform server renderer with auto fallback.
  - will first try the platform-render, and if that fails uses another renderer to finish the page.
  - this will allow sites that are not build with the restrictions of the platforms-server in mind to slowly migrate.
- Build On Demand server
  - This will be a server, where you call into to have Scully build pages on demand.
  - When called with a route, it will return the index.html for that route.
  - It can optionally write it to disk.
  - It can optionally call a script. This might be used to deploy the route
- Extended BOD server. (see right above)
  - Provide webhooks for CMS systems to inform for updated dependencies
  - uses the cache plugin to build a dependencies map
  - will use that map to rerender the pages that are touched by the updated dependency.
  - will provide a way to manually add linked deps. (if x updates, render y)
- Monitoring server.
  - this will be a server that you can use to monitor your CMS(es) and/or DB's and then kicks off the Extended BOD functionality to deploy the updated routes
- Hybrid SSR server on top of the platform-server renderer.
  - this extends the BOD server with:
  - a way to handle sites with a mixture of dynamic session pages and static ones
  - static pages will be prerendered, and served fully static
  - dynamic-session pages will be rendered on demand.

When you want us to give any of those priority, check our [consultancy page](/getHelp). The team at HeroDevs will gladly help you.
