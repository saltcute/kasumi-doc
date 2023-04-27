# Events

Commands and menus may just not be enough for your application. Therefore, you can also listen to events of Kasumi.js.

```typescript
client.message.on('allTextMessages', (event) => {
    console.log(event.content);
})
```

::: tip

Kasumi.js have the `allTextMessages` event for compatibily. It is the combination of `markdownMessages` and `plainTextMessages`.

However, web and mobile client of KOOK now send everything in `markdownMessages`, and `plainTextMessages` sent by bots are converted to `markdownMessage` on KOOK's server. Therefore, it is mostly identical to use `markdownMessages` over `allTextMessages`.

:::