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

`defineComponent` is a function for defining type-safe component.

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

### defineAction

`defineAction` is a function for defining type-safe action component.<br />
Ref: [Quickstart: Action Development](https://pipedream.com/docs/components/quickstart/nodejs/actions/)

```ts
import { defineAction } from "ironpipe"

module.exports = defineAction({
  type: "action",
  name: "example-action",
  key: "example_action",
  version: "0.0.1",
  props: {
    url: {
      type: "string",
      label: "something url",
    },
    target: {
      type: "string",
      label: "replace target string",
      optional: true,
    },
  },
  async run() {
    return this.url.replace(this.target || "http", "https")
  },
})
```

#### Example Usage

- [comic-meteor-feed.ts (http endpoint to delivery rss of comic-meteor)](https://gist.github.com/ci7lus/1345c318a4d98a6e9f6051d926930949)
- [comic-meteor.ts (Subscribe to comic-meteor-feed.ts)](https://gist.github.com/ci7lus/b16c41183892b815321a8c903b2350c4)
- [mangacross.ts (Get a new comic series update for mangacross)](https://gist.github.com/ci7lus/ffd9f586ddd231290c3d90c1598ee9b8)
- [nicomanga.ts (Get a new comic series update for niconico-manga)](https://gist.github.com/ci7lus/ad23531f902ac32a572c935a183fc063)
- [booth-search.ts (Get specified search criteria for booth.pm](https://gist.github.com/ci7lus/29efeac02148c2a68eaa4169cff5f924)
