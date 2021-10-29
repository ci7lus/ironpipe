import { ArgEventTypes } from "./pipedream"
import { MethodOptions } from "./methods"
import { ExtractPropTypes, InstancePropsOptions } from "./props"
import { InstanceThis } from "./options"
import { string2 } from "../types"

export type ComponentInstance = {
  name: string
  type?: "source"
  version: string
  description?: string
  dedupe?: "unique" | "greatest" | "last" | string2
  run: (event?: ArgEventTypes | any) => any
  hooks?: {
    activate: Function
    deactivate: Function
    deploy: Function
    [key: string]: Function
  }
}

export type ComponentOptions<
  PropsOptions = InstancePropsOptions,
  Methods extends MethodOptions = {},
  Props = Readonly<ExtractPropTypes<PropsOptions>>
> = ComponentInstance & {
  props: PropsOptions
  methods?: Methods
} & InstanceThis<Props, Methods>
