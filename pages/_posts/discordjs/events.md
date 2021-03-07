---
title: Events
excerpt: Understanding Discord.js events
date: 2021-03-05
layout: post
permalink: /discordjs/events
tags:
    - nodejs
    - discordjs
---

- Discord.js triggers certain events when a `message` is sent or `ready` when the bot is ready.

<Admonition type="tip">
All the events can be referred [here](https://discord.js.org/#/docs/main/stable/class/Client)
</Admonition>

## Creating Event Handlers

An Overview of using events.

```javascript
client.on("eventName", args => {
    // Handle the events here
});
```

## Example

Example of `messageDelete` event.

```javascript
client.on("messageDelete", message => {
    console.log(
        `Content: ${message.content}\nGuild: ${message.guild.name}\nAuthor: ${message.author.tag}\nChannel: ${message.channel.name}`
    );
});
```

<script>
import Admonition from "../../../components/Admonition.vue";

export default {
    components: {
        Admonition
    }
}
</script>
