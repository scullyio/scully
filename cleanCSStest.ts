import { JSDOM } from 'jsdom';

const dom = new JSDOM(gethtml());
const { window } = dom;
const { document } = window;
// const styles = document.querySelectorAll('style'); //?

// console.log(sheets.length, styles.length)
setTimeout(() => {
  const sheets = document.styleSheets; //?
  for (let i = 0; i < sheets.length; i += 1) {
    const sheet = sheets[i].cssRules;
    for (let y = 0; y < sheet.length; y += 1) {
      const rule = sheet[y];
      if (rule instanceof window.CSSStyleRule) {
        console.log(rule.selectorText);
      }
    }
  }
}, 100);

function gethtml() {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta
    name="generator"
    content="Scully 1.0.11"
  >
  <meta charset="utf-8">
  <title>Scully Documentation</title>
  <base href="/">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  >
  <link
    rel="icon"
    type="image/x-icon"
    href="favicon.ico"
  >
  <link
    rel="preconnect"
    href="https://fonts.googleapis.com"
  >
  <style>
    @import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,800;1,900&display=swap);
    @import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap);

    app-root {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 100%;
      max-height: 100vh
    }

    app-root>.page-content {
      flex: 1;
      display: flex;
      width: 100%;
      max-height: 100%;
      padding-top: 80px
    }

    @media screen and (max-width:600px) {
      app-root>.page-content {
        padding-top: 60px
      }
    }

    app-root>.page-content .nav-container {
      display: flex;
      flex-direction: column;
      padding-top: 6px
    }

    @media screen and (max-width:1000px) {
      app-root>.page-content .nav-container {
        --nav-container-offset: 134px;
        position: fixed;
        display: none;
        top: var(--nav-container-offset);
        left: 0;
        width: 100%;
        height: calc(100vh - var(--nav-container-offset));
        padding-top: 18px;
        background: var(--scully-white);
        z-index: 99
      }
    }

    @media screen and (max-width:600px) {
      app-root>.page-content .nav-container {
        --nav-container-offset: 114px
      }
    }

    @media screen and (max-width:374px) {
      app-root>.page-content .nav-container {
        --nav-container-offset: 112px
      }
    }

    app-root>.page-content .router-container {
      flex: 1;
      max-height: 100vh;
      overflow-y: auto;
      overflow-x: hidden
    }

    input#mobile-toggle {
      position: fixed;
      top: 0;
      left: 0;
      height: 0;
      z-index: -9
    }

    input#mobile-toggle~.page-content .nav-container.landing {
      display: none !important
    }

    nav.scullyio-nav-header {
      position: fixed;
      display: flex;
      top: 0;
      left: 0;
      width: 100%;
      height: 80px;
      background: var(--nav-bg);
      z-index: 99
    }

    @media screen and (max-width:1000px) {
      nav.scullyio-nav-header {
        flex-direction: column;
        height: auto
      }
    }

    nav.scullyio-nav-header ul {
      display: flex;
      justify-content: stretch;
      width: 100%;
      height: 100%
    }

    @media screen and (max-width:600px) {
      nav.scullyio-nav-header ul {
        justify-content: space-between
      }
    }

    nav.scullyio-nav-header ul.mobile-hidden {
      flex: 0
    }

    @media screen and (max-width:1000px) {
      nav.scullyio-nav-header ul.mobile-hidden {
        display: none
      }
    }

    nav.scullyio-nav-header ul li {
      flex: 0;
      display: flex;
      align-items: center;
      white-space: nowrap;
      color: var(--nav-link-color);
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1.5px
    }

    @media screen and (max-width:1000px) {
      nav.scullyio-nav-header ul li {
        flex: 1
      }
    }

    nav.scullyio-nav-header ul li a,
    nav.scullyio-nav-header ul li label {
      padding: 28px;
      color: var(--nav-link-color);
      font-weight: 800;
      opacity: .7
    }

    nav.scullyio-nav-header ul li.text {
      padding: 0 28px;
      opacity: .8
    }

    @media screen and (max-width:1000px) {
      nav.scullyio-nav-header ul li.text {
        flex: .5
      }
    }

    @media screen and (max-width:600px) {
      nav.scullyio-nav-header ul li.text {
        font-size: 10px;
        flex-basis: 30%;
        padding: 0
      }
    }

    @media screen and (max-width:374px) {
      nav.scullyio-nav-header ul li.text {
        font-size: 9px
      }
    }

    @media screen and (max-width:340px) {
      nav.scullyio-nav-header ul li.text {
        font-size: 8px
      }
    }

    @media screen and (max-width:300px) {
      nav.scullyio-nav-header ul li.text {
        display: none
      }
    }

    nav.scullyio-nav-header ul li.logo {
      flex: 1
    }

    @media screen and (max-width:1000px) {
      nav.scullyio-nav-header ul li.logo {
        flex-basis: 60%;
        height: 80px
      }
    }

    @media screen and (max-width:800px) {
      nav.scullyio-nav-header ul li.logo {
        flex-basis: 50%
      }
    }

    @media screen and (max-width:600px) {
      nav.scullyio-nav-header ul li.logo {
        flex-basis: 40%;
        height: 60px
      }
    }

    nav.scullyio-nav-header ul li.logo a {
      width: 142px;
      height: 46px;
      margin: 0 28px;
      box-shadow: none;
      background-image: var(--nav-logo-path);
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 1
    }

    @media screen and (max-width:600px) {
      nav.scullyio-nav-header ul li.logo a {
        margin: 0 12px
      }
    }

    @media screen and (max-width:374px) {
      nav.scullyio-nav-header ul li.logo a {
        width: 124px;
        height: 40px
      }
    }

    nav.scullyio-nav-header ul li.feature a {
      margin: 0 28px;
      padding: 15px 40px;
      color: var(--scully-white);
      border-radius: 8px;
      box-shadow: none;
      border: 3px solid var(--scully-green);
      background: var(--scully-green);
      opacity: 1
    }

    @media screen and (max-width:1000px) {

      nav.scullyio-nav-header ul li a,
      nav.scullyio-nav-header ul li.feature a {
        width: 100%;
        margin: 0;
        padding: 20px 6px;
        border-radius: 0;
        font-size: 10px;
        text-align: center
      }

      nav.scullyio-nav-header ul li.feature a {
        padding: 16px
      }
    }

    @media screen and (max-width:374px) {
      nav.scullyio-nav-header ul li.feature a {
        padding: 16px 12px
      }

      nav.scullyio-nav-header ul li a,
      nav.scullyio-nav-header ul li.feature a {
        font-size: 9px
      }
    }

    nav.scullyio-nav-header ul li.icon {
      padding: 4px 0
    }

    @media screen and (max-width:374px) {
      nav.scullyio-nav-header ul li.icon {
        flex: 0
      }
    }

    nav.scullyio-nav-header ul li.icon a,
    nav.scullyio-nav-header ul li.icon label {
      align-self: stretch;
      width: 94px;
      padding: 0 28px;
      background-size: 32px;
      background-position: 50%;
      background-repeat: no-repeat;
      filter: var(--nav-icon-color-filter)
    }

    @media screen and (max-width:1000px) {

      nav.scullyio-nav-header ul li.icon a,
      nav.scullyio-nav-header ul li.icon label {
        background-size: 26px;
        width: 100%
      }
    }

    @media screen and (max-width:374px) {

      nav.scullyio-nav-header ul li.icon a,
      nav.scullyio-nav-header ul li.icon label {
        background-size: 20px
      }
    }

    nav.scullyio-nav-header ul li.icon.github a {
      background-image: url(data:image/svg+xml,%3Csvg%20aria-hidden%3D%22true%22%20data-prefix%3D%22fab%22%20data-icon%3D%22github%22%20class%3D%22svg-inline--fa%20fa-github%20fa-w-16%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20496%20512%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M165.9%20397.4c0%202-2.3%203.6-5.2%203.6-3.3.3-5.6-1.3-5.6-3.6%200-2%202.3-3.6%205.2-3.6%203-.3%205.6%201.3%205.6%203.6zm-31.1-4.5c-.7%202%201.3%204.3%204.3%204.9%202.6%201%205.6%200%206.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2%202.3zm44.2-1.7c-2.9.7-4.9%202.6-4.6%204.9.3%202%202.9%203.3%205.9%202.6%202.9-.7%204.9-2.6%204.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8%208C106.1%208%200%20113.3%200%20252c0%20110.9%2069.8%20205.8%20169.5%20239.2%2012.8%202.3%2017.3-5.6%2017.3-12.1%200-6.2-.3-40.4-.3-61.4%200%200-70%2015-84.7-29.8%200%200-11.4-29.1-27.8-36.6%200%200-22.9-15.7%201.6-15.4%200%200%2024.9%202%2038.6%2025.8%2021.9%2038.6%2058.6%2027.5%2072.9%2020.9%202.3-16%208.8-27.1%2016-33.7-55.9-6.2-112.3-14.3-112.3-110.5%200-27.5%207.6-41.3%2023.6-58.9-2.6-6.5-11.1-33.3%202.6-67.9%2020.9-6.5%2069%2027%2069%2027%2020-5.6%2041.5-8.5%2062.8-8.5s42.8%202.9%2062.8%208.5c0%200%2048.1-33.6%2069-27%2013.7%2034.7%205.2%2061.4%202.6%2067.9%2016%2017.7%2025.8%2031.5%2025.8%2058.9%200%2096.5-58.9%20104.2-114.8%20110.5%209.2%207.9%2017%2022.9%2017%2046.4%200%2033.7-.3%2075.4-.3%2083.6%200%206.5%204.6%2014.4%2017.3%2012.1C428.2%20457.8%20496%20362.9%20496%20252%20496%20113.3%20383.5%208%20244.8%208zM97.2%20352.9c-1.3%201-1%203.3.7%205.2%201.6%201.6%203.9%202.3%205.2%201%201.3-1%201-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7%201.3.3%202.9%202.3%203.9%201.6%201%203.6.7%204.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4%2035.6c-1.6%201.3-1%204.3%201.3%206.2%202.3%202.3%205.2%202.6%206.5%201%201.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6%201-1.6%203.6%200%205.9%201.6%202.3%204.3%203.3%205.6%202.3%201.6-1.3%201.6-3.9%200-6.2-1.4-2.3-4-3.3-5.6-2z%22%2F%3E%3C%2Fsvg%3E)
    }

    nav.scullyio-nav-header ul li.menu {
      flex: 0;
      flex-basis: 100%;
      display: none
    }

    @media screen and (max-width:1000px) {
      nav.scullyio-nav-header ul li.menu {
        display: flex;
        flex-basis: 72px
      }
    }

    @media screen and (max-width:374px) {
      nav.scullyio-nav-header ul li.menu {
        flex-basis: 5px
      }
    }

    nav.scullyio-nav-header ul li.icon.menu label {
      width: 100%;
      margin-top: -2px;
      background-size: 16px;
      background-image: url(data:image/svg+xml,%3Csvg%20aria-hidden%3D%22true%22%20data-prefix%3D%22far%22%20data-icon%3D%22bars%22%20class%3D%22svg-inline--fa%20fa-bars%20fa-w-14%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20448%20512%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M436%20124H12c-6.627%200-12-5.373-12-12V80c0-6.627%205.373-12%2012-12h424c6.627%200%2012%205.373%2012%2012v32c0%206.627-5.373%2012-12%2012zm0%20160H12c-6.627%200-12-5.373-12-12v-32c0-6.627%205.373-12%2012-12h424c6.627%200%2012%205.373%2012%2012v32c0%206.627-5.373%2012-12%2012zm0%20160H12c-6.627%200-12-5.373-12-12v-32c0-6.627%205.373-12%2012-12h424c6.627%200%2012%205.373%2012%2012v32c0%206.627-5.373%2012-12%2012z%22%2F%3E%3C%2Fsvg%3E)
    }

    @media screen and (max-width:1000px) {
      nav.scullyio-nav-header ul.persistent {
        display: flex
      }
    }

    .scullyio-lang-select {
      position: relative;
      display: flex;
      justify-content: flex-start;
      margin: 0 6px 6px
    }

    .tab {
      overflow: hidden;
      border: 1px solid #ccc;
      background-color: #f1f1f1;
      border-radius: 8px 8px 0 0
    }

    .tab>a {
      background-color: inherit;
      color: rgba(0, 0, 0, .7);
      font-size: 12px;
      font-weight: 900;
      float: left;
      border: none;
      outline: 0;
      padding: 14px 16px
    }

    section.scullyio-landing-features {
      --landing-features-side-padding: 0;
      position: relative;
      display: flex;
      justify-content: center;
      max-width: 100%;
      padding: 50px var(--landing-features-side-padding) 60px;
      box-shadow: inset 0 3px 2px -2px rgba(88, 74, 74, .1), inset 0 -2px 2px -2px rgba(0, 0, 0, .1);
      background: rgba(0, 110, 110, .05);
      background: var(--scully-night);
      z-index: 1
    }

    @media screen and (max-width:1150px) {
      section.scullyio-landing-features {
        --landing-features-side-padding: 54px;
        grid-template-columns: 1fr
      }
    }

    @media screen and (max-width:700px) {
      section.scullyio-landing-features {
        --landing-features-side-padding: 34px
      }
    }

    @media screen and (max-width:400px) {
      section.scullyio-landing-features {
        --landing-features-side-padding: 24px
      }
    }

    section.scullyio-landing-features .features {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 54px;
      width: 1000px;
      max-width: 100%;
      margin: 34px 0
    }

    @media screen and (max-width:1150px) {
      section.scullyio-landing-features .features {
        grid-template-columns: 1fr;
        max-width: 520px
      }
    }

    section.scullyio-landing-features .features .feature {
      display: flex;
      flex-direction: column
    }

    section.scullyio-landing-features .features .feature h2 {
      margin: 34px 0 20px;
      color: var(--scully-white);
      font-size: 28px;
      font-weight: 700;
      line-height: 1.3
    }

    section.scullyio-landing-features .features .feature h2 a {
      color: var(--scully-white);
      font-weight: 700
    }

    section.scullyio-landing-features .features .feature .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;
      width: 80px;
      height: 80px;
      background: var(--scully-white);
      background: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22261.901%22%20height%3D%22262.006%22%3E%3Cpath%20opacity%3D%22.12%22%20fill%3D%22%23010101%22%20d%3D%22M204.413%20260.533a18.708%2018.708%200%2001-9.59%201.328%20248.139%20248.139%200%2001-113.354-44.385%20246.214%20246.214%200%2001-79.737-96.365%2018.653%2018.653%200%20011.784-18.746C54.996%2031.02%20140.573-7.518%20228.119%201.224a18.687%2018.687%200%200115.401%2011.504%20246.117%20246.117%200%200116.068%20126.989%20247.72%20247.72%200%2001-47.535%20114.869%2018.653%2018.653%200%2001-7.64%205.947z%22%2F%3E%3C%2Fsvg%3E) 50% no-repeat;
      background-size: contain;
      margin-left: 12px
    }

    section.scullyio-landing-features .features .feature .icon-container img {
      display: block;
      margin-top: -4px;
      margin-left: -40px;
      color: var(--scully-darkgray-lighter);
      font-size: 70px;
      filter: var(--scully-darkgray-lighter-filter);
      width: 70px;
      height: 74px;
      transform: translateY(-6px)
    }

    section.scullyio-landing-features .features .feature p {
      color: var(--scully-white);
      font-size: 16px;
      font-weight: 500;
      line-height: 1.8;
      opacity: .8
    }

    section.scullyio-landing-intro {
      --landing-landing-intro-side-padding: 0;
      --landing-landing-intro-top-padding: 80px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 1000px;
      max-width: 100%;
      margin: 0 auto;
      padding: var(--landing-landing-intro-top-padding) var(--landing-landing-intro-side-padding) 124px
    }

    @media screen and (max-width:1080px) {
      section.scullyio-landing-intro {
        width: 100%;
        --landing-landing-intro-side-padding: 54px
      }
    }

    @media screen and (max-width:910px) {
      section.scullyio-landing-intro {
        flex-direction: column
      }
    }

    @media screen and (max-width:600px) {
      section.scullyio-landing-intro {
        --landing-landing-intro-side-padding: 24px;
        --landing-landing-intro-top-padding: 42px
      }
    }

    @media screen and (max-width:400px) {
      section.scullyio-landing-intro {
        --landing-landing-intro-top-padding: 24px
      }
    }

    section.scullyio-landing-intro .text {
      z-index: 1
    }

    @media screen and (max-width:910px) {
      section.scullyio-landing-intro .text {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center
      }
    }

    section.scullyio-landing-intro .text h1 {
      margin-bottom: 30px;
      color: var(--scully-green);
      font-size: 58px;
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -1px
    }

    @media screen and (max-width:1000px) {
      section.scullyio-landing-intro .text h1 {
        font-size: 50px
      }
    }

    @media screen and (max-width:524px) {
      section.scullyio-landing-intro .text h1 {
        font-size: 44px
      }
    }

    @media screen and (max-width:480px) {
      section.scullyio-landing-intro .text h1 {
        width: 100%;
        font-size: 38px;
        letter-spacing: -.5px
      }
    }

    @media screen and (max-width:400px) {
      section.scullyio-landing-intro .text h1 {
        margin-bottom: 20px;
        font-size: 42px
      }
    }

    section.scullyio-landing-intro .text p {
      max-width: 540px;
      margin-bottom: 18px;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.5;
      color: rgba(0, 0, 0, .8)
    }

    @media screen and (max-width:1000px) {
      section.scullyio-landing-intro .text p {
        max-width: 400px
      }
    }

    @media screen and (max-width:400px) {
      section.scullyio-landing-intro .text p {
        margin-bottom: 4px
      }
    }

    section.scullyio-landing-intro .text p strong {
      font-weight: 800
    }

    section.scullyio-landing-intro .text p a {
      position: relative;
      display: inline-block;
      color: var(--scully-green);
      font-weight: 800;
      opacity: .9
    }

    section.scullyio-landing-intro .text .button-container {
      display: flex;
      margin-top: 42px
    }

    @media screen and (max-width:910px) {
      section.scullyio-landing-intro .text .button-container {
        justify-content: center;
        margin-top: 24px
      }
    }

    @media screen and (max-width:480px) {
      section.scullyio-landing-intro .text .button-container {
        flex-direction: column;
        margin-top: 24px;
        width: 100%
      }
    }

    section.scullyio-landing-intro .text .button-container a {
      display: block;
      margin-right: 18px;
      padding: 15px 40px;
      color: var(--scully-white);
      font-size: 18px;
      font-weight: 800;
      letter-spacing: .2px;
      border-radius: 8px;
      box-shadow: none;
      border: 3px solid var(--scully-green);
      background: var(--scully-green);
      opacity: 1
    }

    @media screen and (max-width:910px) {
      section.scullyio-landing-intro .text .button-container a {
        margin: 0 10px
      }
    }

    @media screen and (max-width:480px) {
      section.scullyio-landing-intro .text .button-container a {
        margin-bottom: 12px;
        padding: 16px;
        text-align: center
      }
    }

    section.scullyio-landing-intro .text .button-container a:last-child {
      color: var(--scully-green);
      background: 0 0
    }

    section.scullyio-landing-intro .cli {
      position: relative
    }

    @media screen and (max-width:910px) {
      section.scullyio-landing-intro .cli {
        margin: 72px 0
      }
    }

    @media screen and (max-width:600px) {
      section.scullyio-landing-intro .cli {
        z-index: 0
      }
    }

    @media screen and (max-width:480px) {
      section.scullyio-landing-intro .cli {
        margin: 54px 0
      }
    }

    @media screen and (max-width:400px) {
      section.scullyio-landing-intro .cli {
        margin: 24px 0
      }
    }

    section.scullyio-landing-intro .cli .triad {
      position: absolute;
      content: "";
      top: 60%;
      left: -54%;
      width: 540px;
      height: 540px;
      background: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22543.262%22%20height%3D%22543.264%22%3E%3Cg%20opacity%3D%22.8%22%3E%3ClinearGradient%20id%3D%22a%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%22262.824%22%20y1%3D%22352.604%22%20x2%3D%22494.023%22%20y2%3D%22238.205%22%20gradientTransform%3D%22scale%28-1%201%29%20rotate%286.759%2018.432%20-4901.827%29%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%231bac4e%22%2F%3E%3Cstop%20offset%3D%22.039%22%20stop-color%3D%22%2321ad4e%22%2F%3E%3Cstop%20offset%3D%22.349%22%20stop-color%3D%22%2350b650%22%2F%3E%3Cstop%20offset%3D%22.623%22%20stop-color%3D%22%2372bd52%22%2F%3E%3Cstop%20offset%3D%22.85%22%20stop-color%3D%22%2387c153%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%238ec253%22%2F%3E%3C%2FlinearGradient%3E%3Cpath%20opacity%3D%22.1%22%20fill%3D%22url%28%23a%29%22%20d%3D%22M160.977%20435.208a292.193%20292.193%200%2001-74.705-126.207%20290.332%20290.332%200%2001-2.452-150.989%2022.045%2022.045%200%200116.063-16.008c100.78-24.836%20207.161%205.872%20279.205%2080.593a22.005%2022.005%200%20015.216%2021.594%20290.49%20290.49%200%2001-77.022%20125.863%20292.753%20292.753%200%2001-124.966%2070.773%2022.04%2022.04%200%2001-11.421.051%2022.014%2022.014%200%2001-9.918-5.67z%22%2F%3E%3ClinearGradient%20id%3D%22b%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%22-4.614%22%20y1%3D%22300.104%22%20x2%3D%22255.482%22%20y2%3D%22171.407%22%20gradientTransform%3D%22rotate%28-37.674%20276.715%2027.922%29%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%231bac4e%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2382cf4e%22%2F%3E%3C%2FlinearGradient%3E%3Cpath%20opacity%3D%22.14%22%20fill%3D%22url%28%23b%29%22%20d%3D%22M445.786%20345.626a24.822%2024.822%200%2001-9.215%208.956%20329.358%20329.358%200%2001-156.131%2041.566%20326.756%20326.756%200%2001-160.996-40.443%2024.753%2024.753%200%2001-12.817-21.454c-.976-116.764%2060.299-225.216%20160.819-284.637a24.793%2024.793%200%200125.508.208A326.62%20326.62%200%2001409.9%20173.045a328.723%20328.723%200%200139.384%20160.219%2024.75%2024.75%200%2001-3.498%2012.362z%22%2F%3E%3ClinearGradient%20id%3D%22c%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%22693.997%22%20y1%3D%22155.071%22%20x2%3D%22162.943%22%20y2%3D%22371.093%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23c1ff7a%22%2F%3E%3Cstop%20offset%3D%22.117%22%20stop-color%3D%22%23bafb78%22%2F%3E%3Cstop%20offset%3D%22.292%22%20stop-color%3D%22%23a5f173%22%2F%3E%3Cstop%20offset%3D%22.505%22%20stop-color%3D%22%2383e06a%22%2F%3E%3Cstop%20offset%3D%22.748%22%20stop-color%3D%22%2354c85d%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231bac4e%22%2F%3E%3C%2FlinearGradient%3E%3Cpath%20opacity%3D%22.18%22%20fill%3D%22url%28%23c%29%22%20d%3D%22M403.805%20479.205a27.558%2027.558%200%2001-14.276-.063%20365.958%20365.958%200%2001-156.209-88.467%20363.098%20363.098%200%2001-96.278-157.331%2027.506%2027.506%200%20016.52-26.992C233.617%20112.95%20366.593%2074.565%20492.57%20105.61a27.557%2027.557%200%200120.078%2020.01%20362.922%20362.922%200%2001-3.065%20188.738%20365.257%20365.257%200%2001-93.382%20157.76%2027.523%2027.523%200%2001-12.396%207.087z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E) 50% no-repeat;
      background-size: contain;
      transform: translateY(-49%)
    }

    section.scullyio-landing-intro .cli code,
    section.scullyio-landing-intro .cli pre {
      color: rgba(0, 0, 0, .7);
      font-family: Roboto Mono, monospace;
      font-size: 16px;
      font-weight: 500;
      border-radius: 4px;
      overflow-x: auto
    }

    section.scullyio-landing-intro .cli code {
      margin: 0 2px;
      padding: 2px 6px;
      box-shadow: 0 1px 0 rgba(0, 0, 0, .1);
      background: rgba(68, 106, 107, .1)
    }

    section.scullyio-landing-intro .cli pre {
      position: relative;
      padding: 20px 42px 4px 36px;
      box-shadow: 0 0 0 2px var(--scully-white), 0 0 50px 60px hsla(0, 0%, 100%, .96);
      background: var(--scully-night)
    }

    section.scullyio-landing-intro .cli pre:before {
      content: attr(class);
      position: relative;
      display: block;
      margin-bottom: 6px;
      color: hsla(0, 0%, 100%, .5);
      font-family: Nunito, sans-serif;
      font-size: 9px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      overflow: hidden;
      transform: translateY(-8px) translateX(-20px)
    }

    section.scullyio-landing-intro .cli pre code {
      max-width: 100%;
      margin: 0;
      padding: 0;
      color: var(--scully-white);
      font-weight: 400;
      letter-spacing: .5px;
      background: 0 0;
      box-shadow: none;
      overflow-x: auto
    }

    section.scullyio-landing-quote {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 104px;
      padding-top: 44px
    }

    section.scullyio-landing-quote:after,
    section.scullyio-landing-quote:before {
      content: "";
      position: absolute
    }

    section.scullyio-landing-quote:before {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 340px;
      max-width: 50%;
      border-top: 4px solid var(--scully-green)
    }

    section.scullyio-landing-quote:after {
      content: '"';
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 50%;
      transform: translateX(-50%) translateY(-36%);
      width: 72px;
      height: 72px;
      padding-right: 2px;
      color: var(--scully-green);
      font-size: 44px;
      font-style: oblique;
      border-radius: 50%;
      background: var(--scully-white)
    }

    section.scullyio-landing-quote blockquote,
    section.scullyio-landing-quote cite {
      width: 100%;
      max-width: 640px;
      text-align: center;
      font-style: normal
    }

    @media screen and (max-width:700px) {

      section.scullyio-landing-quote blockquote,
      section.scullyio-landing-quote cite {
        max-width: 100%;
        padding: 0 24px
      }
    }

    @media screen and (max-width:480px) {

      section.scullyio-landing-quote blockquote,
      section.scullyio-landing-quote cite {
        padding: 0 16px
      }
    }

    section.scullyio-landing-quote blockquote {
      margin-bottom: 34px;
      color: var(--scully-night-darker);
      font-size: 32px;
      font-weight: 600;
      letter-spacing: -1px
    }

    @media screen and (max-width:480px) {
      section.scullyio-landing-quote blockquote {
        font-size: 26px
      }
    }

    section.scullyio-landing-quote cite p.name {
      margin-bottom: 8px;
      font-size: 16px;
      font-weight: 800;
      opacity: .72
    }

    section.scullyio-landing-quote cite p.org {
      font-size: 11px;
      letter-spacing: 1px;
      font-weight: 900;
      text-transform: uppercase;
      opacity: .44
    }

    *,
    :after,
    :before,
    body,
    html {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important
    }

    body,
    html {
      height: 100%;
      color: var(--scully-text-color);
      font-weight: 700;
      background: var(--scully-white);
      overflow-x: hidden
    }

    a,
    body,
    html {
      font-family: Nunito, Roboto, sans-serif
    }

    a {
      display: block;
      border: 0;
      padding: 0;
      font-weight: 600;
      text-decoration: none;
      background: 0 0;
      outline: 0
    }

    :root {
      --scully-green: #1bac4e;
      --scully-night: #232d2a;
      --scully-night-darker: #181818;
      --scully-darkgray-lighter: #6c857d;
      --scully-link-blue: #0078bd;
      --scully-link-blue-light: #39cef3;
      --scully-text-color: #191819;
      --scully-white: #fff;
      --scully-black: #000;
      --scully-green-filter: invert(43%) sepia(96%) saturate(1549%) hue-rotate(110deg) brightness(96%) contrast(79%);
      --scully-darkgray-lighter-filter: invert(53%) sepia(24%) saturate(234%) hue-rotate(110deg) brightness(89%) contrast(90%);
      --scully-link-blue-filter: invert(26%) sepia(46%) saturate(4161%) hue-rotate(184deg) brightness(97%) contrast(101%);
      --scully-link-blue-light-filter: invert(67%) sepia(96%) saturate(851%) hue-rotate(156deg) brightness(99%) contrast(93%);
      --scully-white-filter: brightness(0) invert(1);
      --scully-grey_5-filter: brightness(0) invert(0.5)
    }

    ul.sideMenu {
      margin-left: 0;
      list-style-type: none
    }

    .nav-container>nav {
      color: rgba(0, 0, 0, .6);
      width: 340px;
      max-height: 100vh;
      padding-bottom: 22px;
      overflow-y: auto;
      overflow-x: hidden
    }
  </style>
  <link
    href="styles.css"
    rel="preload"
    as="style"
  >
  <link
    rel="stylesheet"
    href="styles.css"
    media="print"
    onload="this.media='all'"
  >
  <script
    sk=""
    src="https://cdn.logrocket.io/LogRocket.min.js"
  ></script>
  <script sk="">window.LogRocket && window.LogRocket.init('test/test');</script>
  <!-- Google Analytics -->
  <script sk="">
    window.ga = window.ga || function () { (ga.q = ga.q || []).push(arguments) }; ga.l = +new Date;
    ga('create', 'test', 'auto');
    ga('send', 'pageview');
  </script>
  <script
    sk=""
    async=""
    src="https://www.google-analytics.com/analytics.js"
  ></script>
  <!-- End Google Analytics -->
</head>

<body scully-version="1.0.11">
  <app-root ng-version="11.0.3"><input
      type="checkbox"
      id="mobile-toggle"
      hidden=""
    >
    <nav
      theme="dark"
      class="scullyio-nav-header"
      style="--nav-bg:var(--scully-black); --nav-logo-path:url(&quot;/assets/img/scullyio-logo-light.svg&quot;); --nav-link-color:var(--scully-white); --nav-link-box-shadow-color:var(--scully-white); --nav-icon-color-filter:brightness(0) invert(1);"
    >
      <ul class="persistent">
        <li class="logo"><a
            aria-label="go to home page"
            routerlink="/"
            href="/"
          ></a></li>
        <li class="icon menu"><label for="mobile-toggle"></label></li>
      </ul>
      <ul class="mobile-hidden">
        <li class="feature"><a
            routerlink="/docs/learn/getting-started/overview"
            href="/docs/learn/getting-started/overview/"
          >get started</a></li>
        <li><a
            routerlink="/docs/learn/overview"
            href="/docs/learn/overview/"
          >docs</a></li>
        <li><a
            routerlink="/docs/community/showcase"
            href="/docs/community/showcase/"
          >showcase</a></li>
        <li class="icon github"><a
            aria-label="to our github page"
            href="https://github.com/scullyio/scully"
            rel="noreferrer noopener"
          ></a></li>
      </ul>
    </nav>
    <div class="page-content">
      <section class="nav-container landing">
        <div class="scullyio-lang-select">
          <div class="tab"><a
              routerlinkactive="active"
              class="tablinks"
              href="/docs/learn/overview/"
            > English </a></div>
          <div class="tab"><a
              routerlinkactive="active"
              class="tablinks"
              href="/docs/learn/overview_es/"
            > Español </a></div>
          <!---->
        </div>
        <nav>
          <ul class="sideMenu">
            <!---->
          </ul>
        </nav>
      </section>
      <section class="router-container">
        <router-outlet></router-outlet>
        <scullyio-landing-page>
          <section class="scullyio-landing-intro">
            <div class="text">
              <h1>Static Angular sites,<br>wicked fast.</h1>
              <p><strong>Scully</strong> makes building, testing and deploying <a
                  href="https://jamstack.org/"
                  rel="noreferrer noopener"
                >Jamstack</a> apps <strong>extremely simple.</strong></p>
              <div class="button-container"><a href="/docs/learn/getting-started/overview/">Get Started</a><a
                  href="/docs/learn/overview#how-does-it-work"
                >How it Works</a></div>
            </div>
            <div class="cli">
              <div class="triad"></div>
              <div style="position: relative;">
                <pre class="terminal"><button class="copyToClipboard ">Copy</button><code>ng add @scullyio/init</code>
      </pre>
              </div>
            </div>
          </section>
          <section class="scullyio-landing-features">
            <section class="features">
              <div class="feature">
                <div class="icon-container"><img
                    width="70"
                    height="74"
                    src="/assets/img/icons/angular-brands.svg"
                    alt="angular logo"
                  ></div>
                <h2>Jamstack Toolchain</h2>
                <p> Scully's CLI is powerful enough to make JAMstack possible for all Angular and Angular-hybrid
                  projects. Everything needed to build, test, and deploy is included out of the box. </p>
              </div>
              <div class="feature">
                <div class="icon-container"><img
                    width="70"
                    height="74"
                    src="/assets/img/icons/angle-double-right-solid.svg"
                    alt="right arrows"
                  ></div>
                <h2>Runtime Tooling</h2>
                <p> Scully gives developers the necessary tools to JAMstackify any Angular project, including
                  fine-grained control where needed. </p>
              </div>
              <div class="feature">
                <div class="icon-container"><img
                    width="70"
                    height="74"
                    alt="puzzle piece"
                    src="/assets/img/icons/puzzle-piece-solid.svg"
                  ></div>
                <h2><a
                    routerlink="/docs/Reference/plugins/overview"
                    href="/docs/Reference/plugins/overview/"
                  >Plugin System</a></h2>
                <p> Extend and adapt Scully to any need with its powerful plugin ecosystem. Choose from built-in
                  plugins, community plugins, or make you own custom plugin and unleash the full power of Scully. </p>
              </div>
            </section>
          </section>
          <section class="scullyio-landing-quote">
            <blockquote>
              <p>Nothing will make your Angular project as fast as using Scully and embracing Jamstack.</p>
            </blockquote><cite>
              <p class="name">- Aaron Frost</p>
              <p class="org">Scully Core Team Member</p>
            </cite>
          </section>
          <section class="scullyio-landing-resources"><a href="/docs/learn/introduction/"><img
                width="45"
                height="54"
                src="/assets/img/icons/book-solid.svg"
                alt="book symbol"
              >
              <div class="text">
                <h3>Guides</h3>
                <p>Easy step-by-step guides to help you get started.</p>
              </div>
            </a><a href="/docs/learn/create-a-blog/add-blog-support/"><img
                width="54"
                height="54"
                src="/assets/img/icons/blog-solid.svg"
                alt="blog symbol"
              >
              <div class="text">
                <h3>Create a blog</h3>
                <p>Create your own static Angular blog in 5 minutes.</p>
              </div>
            </a></section>
          <footer class="scullyio-footer">
            <section>
              <h2>Learn</h2>
              <ul>
                <li><a
                    routerlink="/docs/learn/introduction"
                    href="/docs/learn/introduction/"
                  >Docs</a></li>
                <li><a
                    routerlink="/docs/learn/getting-started/requirements"
                    href="/docs/learn/getting-started/requirements/"
                  >Quickstart</a></li>
              </ul>
            </section>
            <section>
              <h2>Community</h2>
              <ul>
                <li><a
                    routerlink="/docs/community/contributing"
                    href="/docs/community/contributing/"
                  >Contribute</a></li>
                <li><a
                    href="https://gitter.im/scullyio/community"
                    rel="noreferrer noopener"
                  >Gitter Channel</a></li>
                <li><a
                    href="https://twitter.com/ScullyIO"
                    rel="noreferrer noopener"
                  >Twitter</a></li>
              </ul>
            </section>
            <section>
              <h2>Organization</h2>
              <ul>
                <li><a
                    href="https://herodevs.com/"
                    rel="noreferrer noopener"
                  >About us</a></li>
                <li><a href="mailto:aaron@hero.dev">Contact us</a></li>
                <li><a
                    href="https://github.com/scullyio/scully/tree/main/assets/logos"
                    rel="noreferrer noopener"
                  >Press kit</a></li>
              </ul>
            </section>
          </footer>
        </scullyio-landing-page>
        <!---->
      </section>
    </div>
  </app-root>




  <noscript>
    <link
      rel="stylesheet"
      href="styles.css"
    >
  </noscript>


  <script
    defer=""
    sk=""
  >
    const s = document.createElement('script');
    s.src = '/assets/clipboard.min.js';
    s.addEventListener('load', () => registerCopyToClipboard());
    s.addEventListener('error', () => console.warn('could not load "/assets/clipboard.min.js", make sure you have it copied into your assets folder'));
    document.body.appendChild(s)

    function registerCopyToClipboard() {
      const clip = new ClipboardJS('pre .copyToClipboard', {
        target: function (trigger) {
          return trigger.nextElementSibling;
        },
      });

      clip.on('success', function (event) {
        event.trigger.textContent = 'Copied!';
        event.clearSelection();
        setTimeout(function () {
          event.trigger.textContent = 'Copy';
        }, 2000);
      });
    }
  </script>
  <style>
    .copyToClipboard {
      position: absolute;
      right: 0;
      top: 0;
      padding: 5px;
      color: rgb(27, 172, 78);
      border-radius: 4px;
      margin: 5px;
      border: 1px solid rgb(27, 172, 78);
    }

    .copyToClipboard:hover {
      background-color: rgb(27, 172, 78);
      color: white;
      border: 1px solid rgb(27, 172, 78);
    }
  </style>
</body>

</html>
`;
}
