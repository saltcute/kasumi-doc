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
const client = new Kasumi(config);
```

```javascript [index.cjs]
const Kasumi = require('kasumi.js').default;
const client = new Kasumi(config);
```

```javascript [index.mjs]
/**
 * Default export does not work in ESM files for some reasons.
 */
import { Kasumi } from 'kasumi.js';
const client = new Kasumi(config);
```

:::

Here, `config` is a `KasumiConfig` object, which needs to be configured as illustrated.

::: code-group

```typescript [WebSocket]
import type { KasumiConfig } from 'kasumi.js';

const config: KasumiConfig = {
    type: 'websocket',
    token: '1/CR4Zyt=/thUr5d4YVme50pLSq5Ee9MA==',
    // vendor: 'kookts',
    // vendor: 'botroot'
    vendor: 'hexona',
    disableSnOrderCheck: true
};
```

```typescript [WebHook]
import type { KasumiConfig } from 'kasumi.js';

const config: KasumiConfig = {
    type: 'webhook',
    token: '1/CR4Zyt=/thUr5d4YVme50pLSq5Ee9MA==',
    verifyToken: 'dFKF2UMYHBPjv2aC',
    encryptKey: 'SZ53zF',
    port: 8888,
    disableSnOrderCheck: true
};
```

:::

::: warning Disable SN Order Check?

Disabling sn order check is recommend against by KOOK. However, it is proven to cause problems in real situation to enable it. Some frameworks like khl.py decided to not follow the order, while some like KookBC decides to strictly do. You can compare the two options and decide for yourself.

The default value in Kasumi.js is false--Enabling sn order check.

:::

::: details WebHook Encryption and zlib Compression

In Kasumi.js, encryption is required for WebHook connection mode.

Kasumi.js does not support compression. You must add `?compress=0` to your WebHook callback URL in order to work.

:::

## Where's the audio??

The bot would not response to any message yet, since there is not any command or event listener. You can learn how to create one in the next chapter.