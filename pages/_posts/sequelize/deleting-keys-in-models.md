---
title: Deleting a Key
excerpt: How to delete a key in Sequelize Model
date: 2021-03-05
layout: post
permalink: /sequelize/delete-key-in-model
tags:
    - nodejs
    - sequelize
---

## Deleting a Key

- The `Async/Await` method

```javascript
const result = await database.destroy({ where: { key: "test" } });
console.log(result);
```

- The `.then()` method

```javascript
database
    .destroy({ where: { key: "test" } })
    .then(result => console.log(result))
    .catch(console.error);
```
