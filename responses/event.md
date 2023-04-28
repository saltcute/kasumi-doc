# Events

Commands and menus may just not be enough for your application. Therefore, you can also listen to events in Kasumi.js.

::: code-group

```typescript [Current]
client.on('message.text', (event) => {
    console.log(event.content);
})
```

```typescript [Legacy]
client.message.on('allTextMessages', (event) => {
    console.log(event.content);
})
```

:::

::: tip

In `Kasumi.js@^3.0.0`, the `message.text` event is a combination of `message.text.markdown` and `message.text.plain` for compatibility.

However, official KOOK clients now send everything in `message.text.markdown`. `message.text.plain` sent by bots are converted to `message.text.plain` on KOOK's server.

:::