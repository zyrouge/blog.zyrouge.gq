---
title: Creating a Key
excerpt: How to create a Key in Sequelize Model
date: 2021-03-05
layout: post
permalink: /sequelize/creating-keys-and-models
tags:
    - nodejs
    - sequelize
---

## Creating a Key

- The `Async/Await` method

```javascript
const result = await database.create({ key: "test", value: 1 });
console.log(result);
```

- The `.then()` method

```javascript
database
    .create({ key: "test", value: 1 })
    .then(result => console.log(result))
    .catch(console.error);
```
