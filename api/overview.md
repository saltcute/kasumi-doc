# Overview

## Response Format

In the ideal situation, API methods in Kasumi.js should not throw *any* error. Request result will be returned in `RequestResponse` type. Normally, the object will consist of *only* one of the two properties: `data` or `error`. 

You may see TypeScript type hint like `RequestResponse<SomeType>`. An API method with that return type will have a `data` property of type `SomeType` in the returned object, if no error occured during the call.

Whenever an error occured, it would be caught and returned in the `error` property. The `error` property will be a reference to the original error caught.

## Mutli-page API Call

Some API methods, like `API.guild.list()`, are a `multiPageRequest`. They will return a `AsyncGenerator` object, which can be used to iterate through all pages of the request. Each iteration consists of a `RequestResponse` object like other API methods do.

## API Methods (WIP)

- [Guild](/api/guild)
- [Channel](/api/channel)
- [Message](/api/message)
- [User](/api/user)
- [Asset](/api/asset)
- [Badge](/api/badge)
- [Blacklist](/api/blacklist)
- [Direct Message](/api/directMessage)
- [Game](/api/game)
- [Gateway](/api/gateway)
- [Intimacy](/api/intimacy)
- [Invite](/api/invite)