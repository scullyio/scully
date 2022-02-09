---
title: Meetup Plugin
published: true
lang: en
position: 100
---

# `Meetup`s Plugin

<div class="docs-link_table">
  <a class="repository" href="https://github.com/Dutch-Angular-Group/website/tree/main/libs/scully-plugin-meetup"></a>
</div>

The `scully-plugin-meetup` is a `router` plugin for [Scully](http://scully.io/) that fetches data from the Meetup Event API durigin route discovery.
Scully uses the results of the Meetup Event API to render static files for each event.

## 📦 Installation

To install this plugin with `npm` run

```
$ npm install scully-plugin-meetup --save-dev
```

## Usage

Your app has should have an Angular route configured with the path `event/:eventId`. Scully needs help understanding the route parameter `:eventId`.

The following is an example of how you could use the `scully-plugin-meetup` to get `eventId`s pre-rendered based on the Meetup Event API.

```typescript
// scully.config.ts
export const config: ScullyConfig = {
  // Add the following to your file
  routes: {
    '/event/:eventId': {
      type: 'meetup',
      eventId: {
        name: 'YOUR_MEETUP_GROUP_NAME',
        property: 'id'
      }
    }
  }
};
```

## Example of configuration

The above example tells Scully to use the `meetup` plugin for fetching some the data via HTTP whenever it finds a route matching `/event/:eventId`.
The Meetup plugin plucks the provided property name from each of the items and will generate static pages based on all of the events that are in the result.

It is possible to configure the `meetup` plugin, below an example where you will only get the lastest 10 events from the past.

```typescript
// scully.config.ts
export const config: ScullyConfig = {
  // Add the following to your file
  routes: {
    '/event/:eventId': {
      type: 'meetup',
      eventId: {
        name: 'YOUR_MEETUP_GROUP_NAME',
        property: 'id',
        amount: 10,
        status: `past`
      }
    }
  }
};
```

| Configuration property | Description                                              | Example values                                             |
| ---------------------- | -------------------------------------------------------- | ---------------------------------------------------------- |
| Name                   | The name of your meetup group                            | _Dutch-Angular-Group_                                      |
| Amount                 | The amount of events the api needs to return             | _10_ **(max 100)**                                         |
| Status                 | The status of an event, this can be _past_ or _upcoming_ | _past_                                                     |
| Sorting                | A function that handles the sorting of the event         | `(eventA, eventB) => (eventA.date < eventB.date ? 1 : -1)` |
