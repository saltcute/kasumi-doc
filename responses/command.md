# Command

The simplest way to response to a message is with a `BaseCommand`.

Registering a command is simple, but before everything, we need to create it.

## Create a Command

First, import the `BaseCommand` class.

::: code-group 

```typescript [index.ts]
import { BaseCommand } from 'kasumi.js';
```

```javascript [index.js]
const { BaseCommand } = require('kasumi.js');
```

:::

Extend it, and provide it with some custom details. 


```typescript
class MyCommand extends BaseCommand {
    name = "echo";
    description = "Reply back what you say";
    // ...
}
```

::: warning

`name` must be unique and **without spaces**. It will be later used to trigger the command. If two or more commands with exact same name was found, the latter one will override the previous one.

Realistically, you would not want to have two command with exactly same names, would you?

:::

::: tip

Description is optional. 

:::

## Implement Its Function

Whenever a incoming message matches the name of the command, `BaseCommand.func` will be called. The default value of `BaseCommand.func` will just throw an error, so we need to implement one ourself. 

Here is an example of replying back everything the user provide.

::: code-group

```typescript [index.ts]
import { BaseCommand, CommandFunction, BaseSession } from 'kasumi.js';

//...

class MyCommand extends BaseCommand {
    name = "echo";
    description = "Reply back what you say";

    func: CommandFunction<BaseSession, void> = async (session) => { // [!code focus]
        session.reply(session.args.join(' '));                      // [!code focus]
    }                                                               // [!code focus]
}
```

```javascript [index.js]
const { BaseCommand } = require('kasumi.js');

//...

class MyCommand extends BaseCommand {
    name = "echo";
    description = "Reply back what you say";
    
    func = async (session) => {                         // [!code focus]
        session.reply(session.args.join(' '));          // [!code focus]
    }                                                   // [!code focus]
}
```

:::

At this time, we can just ignore `session` and proceeds next. We will talk about it later.

## Load the Command

After implementing the command, we need to tell Kasumi to use it.

First, we need to instanciate our command.

```typescript
const command = new MyCommand();    // [!code focus]
client.plugin.load(command);
client.connect();
```

Then, we load it into our `Kasumi` client.

```typescript
const command = new MyCommand();
client.plugin.load(command);        // [!code focus]
client.connect();
```

Connect if you haven't.

```typescript
const command = new MyCommand();
client.plugin.load(command);        
client.connect();                   // [!code focus]
```

Then you can start the bot.

::: code-group

```sh [TypeScript]
$ node --nolazy -r ts-node/register -r tsconfig-paths/register index.ts
```

```sh [JavaScript]
$ node index.js
```

:::

If everything goes well, you should see some output in your terminal.

::: code-group

```sh [WebSocket]
$ 05:56:28.813  INFO kasumi: Logged in as My Bot#1145 (1234567890)
```

```sh [WebHook]
$ 05:56:28.813  INFO kasumi: Logged in as My Bot#1145 (1234567890)
$ 05:56:28.827  INFO kasumi.webhook: Kasumi starts listening on port 8888
```

:::

::: details Outputs are messed up?

Kasumi.js uses [bunyan](https://github.com/trentm/node-bunyan) for logging. You need to install bunyan to see the correctly formatted output.

```sh
$ npm install -g bunyan
```

::: code-group

```sh [TypeScript]
$ node --nolazy -r ts-node/register -r tsconfig-paths/register index.ts | bunyan -L
```

```sh [JavaScript]
$ node index.js | bunyan -L
```



::: tip

On default, Kasumi.js only prints message above `INFO` level. You can override that by specifing `LOG_LEVEL` environment variable

:::

You can now send a message to your bot and expect its reply.

```txt
You: /echo PHP is the best programming language in the world!
My Bot: PHP is the best programming language in the world!
```

