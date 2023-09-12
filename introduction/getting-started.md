# Getting Started

::: tip

You can also start with the [template](https://github.com/hexona69/kasumi-template).

:::

## Installation

Simply install it from npm:

::: code-group

```sh [npm]
$ npm install --save kasumi.js
```

:::

## Minimal Example

After installation, you can then import Kasumi.js and instantiate a bot client;

::: code-group

```typescript [index.ts]
import Kasumi from 'kasumi.js';
const client = new Kasumi();
```

```javascript [index.cjs]
const Kasumi = require('kasumi.js').default;
const client = new Kasumi();
```

```javascript [index.mjs]
/**
 * Kasumi.js is pretty much broken in ESM
 * Compatibility with ESM is in TODO, but not ETA will be provided
 * At the moment, you should use CommonJS instead
 */
import { Kasumi } from 'kasumi.js';
const client = new Kasumi();
```

:::

However, it only throws an `TokenNotProvidedError` at the moment, so we need to provide it with a [KOOK bot token](https://developer.kookapp.cn/app/index).

There are multiple ways of doing that:

### Passing as an Arugument

::: code-group

```typescript [WebSocket]
import Kasumi from 'kasumi.js';
import type { KasumiConfig } from 'kasumi.js';

const config: KasumiConfig = {
    type: 'websocket',
    token: '1/CR4Zyt=/thUr5d4YVme50pLSq5Ee9MA==',
    /**
     * WebSocket connection mode is proven to be very unreliable
     * I haven't found a good fix yet
     * Use WebHook whenever possible
     */
    vendor: 'hexona', // or 'kookts', 'botroot'
    disableSnOrderCheck: true
};

const client = new Kasumi(config);
```

```typescript [WebHook]
import Kasumi from 'kasumi.js';
import type { KasumiConfig } from 'kasumi.js';

const config: KasumiConfig = {
    type: 'webhook',
    token: '1/CR4Zyt=/thUr5d4YVme50pLSq5Ee9MA==',
    verifyToken: 'dFKF2UMYHBPjv2aC',
    encryptKey: 'SZ53zF',
    port: 8888,
    disableSnOrderCheck: true
};

const client = new Kasumi(config);
```

:::

### Read From Config File

Create a `.env` file in the root folder of your project or define it in the shell.

```properties
CONFIG_PATH="/path/to/your/config/file/config.json"
```

In your `config.json`, writes:

::: code-group

```json [WebSocket]
{
    "token": "1/CR4Zyt=/thUr5d4YVme50pLSq5Ee9MA==",
    "connection": "kookts"
}
```

```json [WebHook]
{
    "token": "1/CR4Zyt=/thUr5d4YVme50pLSq5Ee9MA==",
    "connection": "webhook",
    "webhookVerifyToken": "dFKF2UMYHBPjv2aC",
    "webhookEncryptKey": "SZ53zF",
    "webhookPort": 8888
}
```

:::

::: tip

Above properties are require to connect the bot to KOOK. You can also add extra properties in the file. You will be able to access them with `client.config.get(key)`.

:::

### Read From Environment Variables

Create a `.env` file in the root folder of your project or define them in the shell.

::: code-group

```properties [WebSocket]
TOKEN="1/MTE1Nzg=/EitXOAUK10g3ARW6kZ3p7g=="
CONNECTION=kookts
```

```properties [WebHook]
TOKEN="1/MTE1Nzg=/EitXOAUK10g3ARW6kZ3p7g=="
CONNECTION=webhook
VERIFY_TOKEN=dFKF2UMYHBPjv2aC
ENCRYPT_KEY=SZ53zF
PORT=8888
```

:::

::: tip Order of Duplicated Keys

When parsing config, enviroment variables are the highest priority, following by config files and config argument.

If duplicated keys were found, values with higher priority will override values with lower priority.

:::

::: warning Disable SN Order Check?

Disabling sn order check is recommend against by KOOK. However, it is proven to cause problems in real situation to enable it. Some frameworks like khl.py decided to not follow the order, while some like KookBC decides to strictly do. You can compare the two options and decide for yourself.

The default value in Kasumi.js is false--Enabling sn order check.

:::

::: details WebHook Encryption and zlib Compression

In Kasumi.js, encryption is required for WebHook connection mode.

Kasumi.js does not support compression. You must add `?compress=0` to your WebHook callback URL in order for it to work.

:::

## Where's the audio??

The bot would not response to any message yet, since there is not any command or event listener. You can learn how to create one in the next chapter.