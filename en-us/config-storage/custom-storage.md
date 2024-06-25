# Custom Storage

The `Kasumi` constructor takes `T extends {} = {}` to provide type hint for your own config entries. You can define it like this:

```typescript
interface CustomStorage {
    "namespace::my.extra.config.entry": string
    "namespace::another.entry": number
    "namespace::or.some.complicated.objects": {
        name: string
        id: number
        birthday: number
        score: number
    }

    someSimpleName: number
    "orMaYbe.Just#some@arbitrary;name": string

    "typescript::or.a.template.${string}.${number}": string
}
```

To use it, simply:

```typescript
const client: Kasumi<CustomStorage> = new Kasumi()

class CustomCommand extends BaseCommand<Kasumi<CustomStorage>> {
    // ...
}
```
