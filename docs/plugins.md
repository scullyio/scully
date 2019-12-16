# Plugins

Scully uses a plugin system to allow users to define new ways for Scully to build your app. There are two main types of 
plugins:

1. [Route Plugins](#route-plugins)
2. [Data Transform Plugins](#transform-plugins)

See our [Recommended Plugins](recommended-plugins.md) page to find a list of available plugins.

## <a name="route-plugins"></a> Route Plugins

Scully needs __Route Plugins__ to discover data needed to pre-render your app's views. Any route that has a route
parameter in it will require you to configure a plugin that teaches Scully how to get the data needed for those route
parameters. 

Let's look at an example. Suppose your app has a route `{path: 'user/:userId', component: UserComponent}`. In order for 
Scully to pre-render your app, it needs to know the complete list of User IDs that will be used in that route parameter 
`:userId`. If your app had 5 users with the IDs 1, 2, 3, 4, and 5, then Scully would need to render the following routes:
```
/user/10
/user/11
/user/12
/user/13
/user/14
``` 

To provide this list of User IDs to Scully, you'll use a __Route Plugins__.

The following is an example that uses the [jsonplaceholder](https://jsonplaceholder.typicode.com/) to fetch a list of
User IDs for my app. 

```javascript
// scully.config.js
exports.config = {
  // Add the following to your file
  routes: {
    "/user/:userId": {
      "type": "json",
      "userId": {
        "url": "https://jsonplaceholder.typicode.com/users",
        "property": "id"
      }
    }
  }
};
```

The above snippet tells Scully that when it sees a route that matches `/user/:userId` it should use the `json` plugin 
to fetch some JSON via HTTP. After declaring the type of `json`, the above example has a key `userId`. The value for 
`userId` contains two pieces of data. First, the url that the JSON plugin should go to to get this required JSON. The
second is `property`.  The JSON plugin will pluck the provided property name from each of the items in the array. This
means that the array returned by the jsonplaceholder api will each have an `id` property. So instead of returning a list
users, it will return a list of userIds. 


## <a name="transform-plugins"></a> Data Transform Plugins

Describe data transform plugins


Next: [Full Documentation ➡️](scully.md)
