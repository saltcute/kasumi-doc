# Guild

## `API.guild.list()`

Get a list of guilds the bot has joined in, in multi-page format.

### Type Definition

```typescript 
API.guild.list(page?: number, pageSize?: number): AsyncGenerator<RequestResponse<RawGuildListResponse>, void, unknown>;
```

### Usage

```typescript
const guildList = client.API.guild.list();

for await (const { err, data } of guildList) {
    if (err) {
        client.logger.error(err);
        break;
    }
    client.logger.info(data);
}
```

## `API.guild.view()`

### Type Definition

```typescript
API.guild.view(guildId: string): Promise<RequestResponse<RawGuildViewResponse>>;
```

### Usage

```typescript
const guildId = "3272780758159737";

const guildDetail = await client.API.guild.view(guildId);

client.logger.info(guildDetail);
```