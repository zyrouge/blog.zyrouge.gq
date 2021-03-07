---
title: Finding all the Keys
excerpt: How to find all the keys in a Sequelize Model
date: 2021-03-05
layout: post
permalink: /sequelize/find-all-keys-in-model
tags:
    - nodejs
    - sequelize
---

## Finding All

- The `Async/Await` method

```javascript
const result = await database.findAll();
console.log(result);
```

- The `.then()` method

```javascript
database
    .findAll()
    .then(result => console.log(result))
    .catch(console.error);
```
