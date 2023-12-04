# Guild

## `API.guild.list()`

Get a list of guilds the bot has joined in, in multi-page format.

### Type Definition

```typescript 
client.API.guild.list(page?: number, pageSize?: number): AsyncGenerator<RequestResponse<RawGuildListResponse>, void, unknown>;
```

### Usage

```typescript
for await (const { err, data } of client.API.guild.list()) {
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
client.API.guild.view(guildId: string): Promise<RequestResponse<RawGuildViewResponse>>;
```

### Usage

```typescript
const guildId = "3272780758159737";

const { err, data } = await client.API.guild.view(guildId);

if (err) {
    client.logger.error(err);
    return;
}

client.logger.info(data);
```

## `API.guild.userList()`

### Type Definition

```typescript
client.API.guild.userList({ guildId, channelId, search, roleId, mobileVerified, lastSeen, joinTime, page, pageSize, userId }: {
    guildId: string;
    channelId?: string;
    search?: string;
    roleId?: number;
    mobileVerified?: boolean;
    lastSeen?: 'desc' | 'asc';
    joinTime?: 'desc' | 'asc';
    page: number;
    pageSize: number;
    userId?: number;
}): AsyncGenerator<RequestResponse<RawGuildUserListResponse>, void, unknown>;
```
### Usage


```typescript
const guildId = "3272780758159737",
      channelId = "1510119803594291";
for await (const { err, data } of client.API.guild.list({
    guildId,
    channelId
})) {
    if (err) {
        client.logger.error(err);
        break;
    }
    client.logger.info(data);
}
```