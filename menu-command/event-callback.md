# Event Callback

Event callbacks are a easy way to handle user response from either a text message event or a button click event.

## Text Events

When creating an async callback, you need to provide a `filter` function and a `callback` function. If the `filter` function returns `true`, the `callback` function will be called with the event as its argument. The return value of the callback function will be reolsved as the return value of `createAsyncCallback`. `createAsyncCallback` will reject after `timeout` milliseconds if the promise is not resolved. `timeout` is optional and defaults to `30000`.

```typescript
const event = await client.events.callback.createAsyncCallback("message.text", (event) => {
    if (event.channelId == "114514") return true;
    else return false;
}, (event) => {
    return event.content;
}, 3000);
```

There is also `createCallback` and `createSingleCallback` that works similarly but is a standard synchronus callback function.

::: code-group

```typescript [createCallback]
client.events.callback.createCallback("message.text", (event) => {
    if (event.channelId == "114514") return true;
    else return false;
}, (event) => {
    client.logger.info(event.content);
});
```

```typescript [createSingleCallback]
client.events.callback.createSingleCallback("message.text", (event) => {
    if (event.channelId == "114514") return true;
    else return false;
}, (event) => {
    client.logger.info(event.content);
});
```

:::

## Button Events

```typescript
const card = new Card();

const sessionId = client.events.button.createSession('any.string.activator', {
    some: 'data'
});
card.addTextWithButton("Some text", {
    buttonContent: 'Click it!',
    value: JSON.stringify({
        sessionId
    }),
    click: 'return-val'
})

client.events.button.registerActivator('any.string.activator', (event: ButtonClickedEvent, data: data) => {
    client.logger.info(event);
    // {
    //     some: "data"
    // }
});
```