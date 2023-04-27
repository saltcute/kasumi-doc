# You Did It!

You should have a working KOOK bot that can repeat your message now!

::: code-group

```typescript [index.ts]
import { BaseCommand, CommandFunction, BaseSession, KasumiConfig, BaseMenu } from 'kasumi.js';

const config: KasumiConfig = {
    type: 'websocket',
    token: '1/CR4Zyt=/thUr5d4YVme50pLSq5Ee9MA==',
    // vendor: 'kookts',
    // vendor: 'botroot'
    vendor: 'hexona',
    disableSnOrderCheck: true
};

const client = new Kasumi(config);

class MyCommand extends BaseCommand {
    name = "echo";
    description = "Reply back what you say";

    func: CommandFunction<BaseSession, void> = async (session) => { 
        session.reply(session.args.join(' '));                      
    }                                                               
}

class MyMenu extends BaseMenu {
    name = "bot";
    description = "Menu for My Bot";
    prefix = "/!?.";
}

const command = new MyCommand();
const menu = new MyMenu(command);
client.plugin.load(menu);
client.connect();
```


```javascript [index.js]
const { BaseCommand, BaseMenu } = require('kasumi.js');

const config = {
    type: 'websocket',
    token: '1/CR4Zyt=/thUr5d4YVme50pLSq5Ee9MA==',
    // vendor: 'kookts',
    // vendor: 'botroot'
    vendor: 'hexona',
    disableSnOrderCheck: true
};

const client = new Kasumi(config);

class MyCommand extends BaseCommand {
    name = "echo";
    description = "Reply back what you say";

    func = async (session) => { 
        session.reply(session.args.join(' '));                      
    }                                                               
}

class MyMenu extends BaseMenu {
    name = "bot";
    description = "Menu for My Bot";
    prefix = "/!?.";
}

const command = new MyCommand();
const menu = new MyMenu(command);
client.plugin.load(menu);
client.connect();
```

:::