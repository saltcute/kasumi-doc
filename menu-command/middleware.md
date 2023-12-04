# Middleware

Middlewares are functions that are executed before a command is executed. They are useful for adding additional functionality to commands, such as logging, or for validating arguments. All middlewares in `Kasumi.js` are asynchronous functions, and they are executed in the order they are added.

## Defining a Middleware

A middleware is a function that only takes a `BaseSession` object as argument. The function returns a `Promise<boolean>`. When the promise resolves to `true`, Kasumi.js will continue to execute the next middleware or the command function. When the promise resolves to `false`, Kasumi.js will stop executing the command function.

```typescript

const middleware = async (session: BaseSession) => {
    if(isMeetSomeCondition(session)) {
        return true;
    } else {
        return false;
    }
}

```

## Use the Middleware

::: code-group

```typescript [Command]
command.use(middleware);
```

```typescript [Menu]
menu.use(middleware);
```

```typescript [Plugin]
client.plugin.use(middleware);
```

:::

A middleware that is used by `client.plugin` will execute after the default command menu triggered by a @bot mention message.

