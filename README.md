# Social Media Monitor

## Development

1. `npm install` in root directory

2. `npm run client-install` in root directory

3. `npm run dev` in root directory

## Optimizations

1. Change Post Cache from Array of Posts to Map with Post IDs as Keys. Filter and Sort will return array of IDs which will then map with the posts in Cache.

2. Using Mongoose for database queries or apollo with graphql server, we can perform better queries in the `/api/posts` `GET` route.

3. If we need real time updates, we can use polling or web sockets. Once a post has been updated, it should emit an event to update the Post in Cache.
