---
title: PLC less Global Variables
draft: true
---

When to use global variables?

Well they are useful for holding metrics of the application. But they should be avoided in favor of local variables or passing data through function parameters.

When you write functions blocks they inheritly create a structure of your application. This is much easier to understand when variables have a clear scope and purpose. Names don't need to be long with underscores or camelCase but mean something when they are dot notated.
