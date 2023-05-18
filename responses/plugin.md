# Plugin

`client.plugin` loads all your menus and commands into `Kasumi.js`. It also controls the prefixes users will use to trigger the commands.

## More Prefixes

On default, Kasumi.js has three prefixes, `/`, `.` and `!`. You can add more prefixes with `addPrefix`.

```typescript
client.plugin.addPrefix("Any.prefix.without.spaces.");
```

![any prefix example image](/assets/responses/plugin/prefixes.png)

However, this does not change the primary prefix, which, on default, is `/`. You can use this method to set primary prefix, so that you can use your preferred prefix in the command menu.

```typescript
client.plugin.primaryPrefix = "Any.prefix.without.spaces.";
```

![primary prefix example image](/assets/responses/plugin/primary-prefix.png)

## Less Prefixes

You can also remove a prefix.

```typescript
client.plugin.removePrefix("Any.prefix.without.spaces.");
```

## Check Prefix

For some reason you want to check if a prefix is available.

```typescript
if (client.plugin.hasPrefix("Any.prefix.without.spaces.")) {
    console.log("True");
} else {
    console.log("False");
}
```