import { defineComponent } from "../src"
import { createComponent } from "../src/component/create"

const Component = defineComponent({
  name: "test",
  props: {
    test_prop: {
      type: "string",
    },
  },
  version: "0.0.1",
  methods: {
    getHello(): string {
      return this.test_prop
    },
  },
  run() {
    return this.getHello()
  },
})

describe("demo create.ts", () => {
  it("should create a working instance", () => {
    const instance = createComponent(Component, {
      test_prop: "hello",
    })

    expect(instance.run()).toEqual("hello")
  })
})
