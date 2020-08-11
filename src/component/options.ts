import { MethodOptions } from "./methods"
import { ExtractPropTypes, ComponentPropsOptions } from "./props"
import { ObjectLiteral } from "../types"
import { ArgEventTypes } from "./pipedream"

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
  run: (event?: ArgEventTypes | any) => any
  hooks?: { [key: string]: Function }
}

type ComponentThis<Props, Methods> = ThisType<
  {
    $props: Props
    $emit: (
      data: ObjectLiteral,
      metadata?: ObjectLiteral & { id: string } // metadata requires id
    ) => void
  } & Props &
    Methods &
    ObjectLiteral
>
