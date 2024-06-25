# Session

Session contains a context where the command was called. It also provides a couple of method that makes responding to message much more easier.

## Arguments

For a `BaseSession` object, you can access its arguments with `session.args`. It is a `string` array. 

A incoming message `/menu trigger this is arguments of the command` will be split with space and have its trigger removed then put in `session.args`.

``` typescript
console.log(session.args);
// [ 'this', 'is', 'arguments', 'of', 'the', 'command' ]
```

Kasumi.js does not parse arguments like most CLI apps do, it simply split the string and leave them alone.

## Responding

You can use `session.send`, `session.reply` to respond to user requests. They also have their own temporary message variant.

::: code-group

```typescript [Send]
session.send("Text or Card you would like to respond with");
```

```typescript [Reply]
session.reply("Text or Card you would like to respond with");
```

```typescript [Send Temporarily]
session.sendTemp("Text or Card you would like to respond with");
```

```typescript [Reply Temporarily]
session.replyTemp("Text or Card you would like to respond with");
```

:::

## Updating

`BaseSession` also includes method to update a message. However, it does not find the message automatically, and a `messageId` is requried.

### Getting Message ID

`session.send`, `session.reply` and `client.API.message.create` returns an object containing its message ID.

```typescript
const { err, data } = session.send("A message");
if (err) throw err;
console.log(data);
/**
 *  {
 *      msg_id: '472e9be0-a7d6-4807-bb04-ba465308c42a',
 *      msg_timestamp: 1684333952202,
 *      nonce: 'e6991558-9020-4f0c-883c-8d07cb1843b1'
 *  }
 */
```

### Update the Message

By passing this ID to `session.update`, we can update the message we just sent.

```typescript
const messageId = '472e9be0-a7d6-4807-bb04-ba465308c42a';
const { err } = session.update(messageId, 'New message');
if (err) throw err;
```

:::tip

The type of a message cannot be changed after it was sent. For example, you cannot update a text message to be a card message.

:::
