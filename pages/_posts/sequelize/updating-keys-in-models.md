---
title: Updating a Key
excerpt: How to update a key in Sequelize Model
date: 2021-03-05
layout: post
permalink: /sequelize/updating-keys-in-model
tags:
    - nodejs
    - sequelize
---

## Updating a Key

- The `Async/Await` method

```javascript
const result = await database.update({ value: 2 }, { where: { key: "test" } });
console.log(result);
```

- The `.then` method

```javascript
database
    .update({ value: 2 }, { where: { key: "test" } })
    .then(result => console.log(result))
    .catch(console.error);
```
