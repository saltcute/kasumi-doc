# Card

Card messages are a great way to present rich message to your users. 

## Basis

A card in Kasumi.js can be very simple, and it is very straight forward to send a card message.

::: code-group

```typescript [Session]
import { Card } from 'Kasumi.js';
const card = new Card();
session.send(card);
```

```typescript [API]
import { Card, MessageType } from 'Kasumi.js';
const card = new Card();
client.API.message.create(MessageType.CardMessage, card);
```

:::

![empty card image](/assets/menu-command/card/empty.png)

## Multiple Cards

A single message can have multipe cards.

::: code-group

```typescript [Session]
import { Card } from 'Kasumi.js';
const cards = [new Card(), new Card()];
session.send(cards);
```

```typescript [API]
import { Card, MessageType } from 'Kasumi.js';
const cards = [new Card(), new Card()];
client.API.message.create(MessageType.CardMessage, cards);
```

:::

![multiple card image](/assets/menu-command/card/text/multiple.png)

## Text

Add a markdown format text.

```typescript
card.addText("A text module");
```

![simple text module image](/assets/menu-command/card/text/simple.png)

### Image Accessory

A text module can also have an accessory like a image or a button.

```typescript
const imageUrl = "https://img.kookapp.cn/assets/2023-05/SrEYB8jgCF12p0wk.png";

card.addTextWithImage("A text module with image accessory", {
    position: 'left',   // position: 'right',
    url: imageUrl,
    size: 'lg',         // size: 'sm',
    circle: true        // circle: false 
                        // Only has effect when position is 'left'
});
```

![text with image module image](/assets/menu-command/card/text/image.png)

### Button Accessory

```typescript
card.addTextWithButton("A text module with image accessory", {
        buttonContent: 'Text on The Button',
        click: 'return-val', // click: 'link',
        value: 'any value',  
        theme: 'info'
    })
```

::: tip

When `click`'s value is `return-val`, the string in `value` is sent back as a `ButtonClickedEvent` to Kasumi.js upon a user clicks on the button. 

When `click`'s value is `link`, the link in `value` will be opened upon a user clicks on the button.

:::

![text with button module image](/assets/menu-command/card/text/button.png)


