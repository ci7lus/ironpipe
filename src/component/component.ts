import { ArgEventTypes } from "./pipedream"
import { MethodOptions } from "./methods"
import { ExtractPropTypes, InstancePropsOptions } from "./props"
import { InstanceThis } from "./options"

export type ComponentInstance = {
  name: string
  version: string
  description?: string
  dedupe?: string
  run: (event?: ArgEventTypes | any) => any
  hooks?: { [key: string]: Function }
}

export type ComponentOptions<
  PropsOptions = InstancePropsOptions,
  Methods extends MethodOptions = {},
  Props = Readonly<ExtractPropTypes<PropsOptions>>
> = ComponentInstance & {
  props: PropsOptions
  methods?: Methods
} & InstanceThis<Props, Methods>
