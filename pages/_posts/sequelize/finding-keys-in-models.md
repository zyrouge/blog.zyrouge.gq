---
title: Finding a Key
excerpt: How to find a specific key in the Database
date: 2021-03-05
layout: post
permalink: /sequelize/find-keys-in-model
tags:
    - nodejs
    - sequelize
---

## Finding only One

- The `Async/Await` method

```javascript
const result = await database.findOne({ where: { key: "test" } });
console.log(result);
```

- The `.then` method

```javascript
database
    .findOne({ key: "test" })
    .then(result => console.log(result))
    .catch(console.error);
```

<Admonition type="info">
Many Parameters can be specified in `where` options.
</Admonition>

<script>
import Admonition from "../../../components/Admonition.vue";

export default {
    components: {
        Admonition
    }
}
</script>
