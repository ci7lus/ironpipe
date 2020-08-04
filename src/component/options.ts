import { MethodOptions } from "./methods"
import { ExtractPropTypes, ComponentPropsOptions } from "./props"
import { ObjectLiteral } from "../types"

export type ComponentOptions<
  PropsOptions = ComponentPropsOptions,
  Methods extends MethodOptions = {},
  Props = Readonly<ExtractPropTypes<PropsOptions>>
> = ComponentInstance & {
  props: PropsOptions
  methods?: Methods
} & ComponentThis<Props, Methods>

type ComponentInstance = {
  name: string
  version: string
  description?: string
  dedupe?: string
  run: (event?: any) => any | Function
}

type ComponentThis<Props, Methods> = ThisType<
  {
    $props: Props
    $emit: (data: ObjectLiteral, data2?: ObjectLiteral) => void
  } & Props &
    Methods &
    ObjectLiteral
>
