import { MethodOptions } from "./methods"
import { InstanceThis } from "./options"
import { ExtractPropTypes, InstancePropsOptions } from "./props"

export type ActionInstance = {
  type: "action"
  name: string
  version: string
  key: string
  description?: string
  run: () => any
}

export type ActionOptions<
  PropsOptions = InstancePropsOptions,
  Methods extends MethodOptions = {},
  Props = Readonly<ExtractPropTypes<PropsOptions>>
> = ActionInstance & {
  props: PropsOptions
  methods?: Methods
} & InstanceThis<Props, Methods>
