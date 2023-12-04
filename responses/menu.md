# Menu

Menus can isolate commands into their own namespaces to avoid conflict. For example, you have a ChatGPT chatbot, and you want to differentiate between the GPT-3 and GPT-4 version of the bot. You can absolutely use commands like `/chatgpt3` and `/chatgpt4`, but it is much better to have something like `/gpt3 chat` and `/gpt4 chat` to avoid confusion and improve modularity.

## Create a Menu

Creating a menu is similar to a command.


::: code-group 

```typescript [index.ts]
import { BaseMenu } from 'kasumi.js';
```

```javascript [index.js]
const { BaseMenu } = requrie('kasumi.js');
```

:::

Extend it, and provide it with some custom details. 


```typescript
class MyMenu extends BaseMenu {
    name = "bot";
    description = "Menu for My Bot";
}
```

::: warning

Like commands, `name` must be unique and **without spaces**. It will be used to trigger the menu. If two or more menus with exact same name was found, the latter one will override the previous one.

:::

::: tips

In fact, every `BaseMenu` is also a `BaseCommand` with a predefined `func` that will execute the commands inside the menu. This also means that you can have a `BaseMenu` load another `BaseMenu` and it will work just as you imagined, like `/menu1 menu2 command1`.

:::

::: danger

After `Kasumi.js@^0.3.1`, individual menus no longer controls the prefix used to trigger it, as it can only be configured in `client.plugin`.

However, as a bonus, you can now use whatever prefix you want, as long as it does not contain spaces.

:::

## Load the Menu

Menus doesn't need a function, so this is it. We need can load our commands now.

First instanciate our menu.

```typescript
const menu = new MyMenu();    // [!code focus]
client.plugin.load(menu);
```

Then, we load it into our `Kasumi` client.

```typescript
const menu = new MyMenu();
client.plugin.load(menu);        // [!code focus]
```

## Load Commands into Menus

There are two ways you can load a command into a menu.

### Constructor

`BaseMenu`'s constructor takes spreaded `BaseCommand` as argument, so you can do this.

```typescript
const menu = new MyMenu(command);
```

### Method

We can also load a command with `BaseMenu.load` method.

```typescript
const menu = new MyMenu();
menu.load(command); // [!code focus]
```

Run the bot and you should be able to use the echo command with `/bot echo`.