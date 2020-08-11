# ironpipe

![CI](https://github.com/ci7lus/ironpipe/workflows/CI/badge.svg)
[![npm version](https://img.shields.io/npm/v/ironpipe)](https://www.npmjs.com/package/ironpipe)

TypeScript typed helpers for pipedream.

## Install

```shell
yarn add -D ironpipe
```

## Usage

### defineComponent

`defineComponent` is a function for defining type-safe components.

```ts
import { defineComponent } from "ironpipe"

module.exports = defineComponent({
  name: "componentname",
  version: "0.0.1",
  props: {
    url: {
      type: "string",
      label: "something url",
    },
    timer: {
      type: "$.interface.timer",
      default: {
        intervalSeconds: 60 * 15,
      },
    },
    db: "$.service.db",
    http: "$.interface.http",
  },
  methods: {
    random(n: number) {
      return Math.random() * n
    },
  },
  dedupe: "unique",
  async run() {
    // `this` will be typed whenever possible.
    this.db.set("random-value", this.random(100))
    this.db.set("something-url", this.url)

    this.http.respond({
      status: 200,
      headers: {},
      body: this.db.get<number>("random-value")?.toString() || this.url,
    })
  },
})
```
