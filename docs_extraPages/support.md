---
title: Scully Support
published: true
lang: en
position: 2000
---

# Support

How to get support. Scully is free to use, and will always be free. The support we will put in is on best effort, but limited to the resources currently available. When you want/need more, the team at HeroDevs is available for you.

<div class="colhold">
<div class="col">

## Standard
- community support
  - [gitter](https://gitter.im/scullyio/community)
  - [Angular discord Scully channel](https://discord.com/channels/748677963142135818/751266053673320508)
  - [issues](https://github.com/scullyio/scully/issues)
- running Scully on-prem
- all modules under the `@scullyio` npm organization
  
### always free
</div>
<div class="col">

## Pro support
- Everything from __Standard__
- Custom OSS Plugins
- CMS Integration Support
- Email Support
- Preferred pricing for custom development
  
### Contact HeroDevs
</div>
<div class="col">

## Enterprise support
- everything from __pro__
- custom private plugins
- priority email support
- guaranteed response times
- fixed hourly fees

### Contact HeroDevs
</div>
</div>

<!-- The fees mentioned above are based on a yearly, pre-paid subscription. -->

Contact the team at [HeroDevs](https://www.hero.dev)


<style> 
/** 
   This is the styling for the above columns. Keep it local to this file for now.
   we might want to move this into the app-styling? 
*/
.colhold {
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
@media only screen and (max-width: 79rem) {
  .colhold {
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (max-width: 49rem) {
  .colhold {
    grid-template-columns: 1fr;
  }
}

.col {
  position: relative;
  border-radius: 12px 0 12px 0;
  padding:0 0 2rem 0;
  border: 2px solid var(--scully-green);
}
.col>*:first-child {
  text-align:center;
  border-radius: 12px 0 0 0;
  background-color: var(--scully-green);  
  margin:-2px;/** correct for column border **/
}
.col>*:last-child {
  position: absolute;
  text-align:right;
  border-radius: 0 0 12px 0;
  background-color: var(--scully-green);  
  color: var(--scully-white);
  padding: 8px;
  padding-right:16px;
  bottom: 0;
  left:0;
  right:0;
  margin:-2px;/** correct for column border **/
}
.col ul {
  list-style:none;
  padding: 8px;
  margin:0;
}
</style>

