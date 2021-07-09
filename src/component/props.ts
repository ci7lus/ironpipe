import {
  PipedreamPropTypes,
  PropReturnDInterfaceTimer,
  PropReturnDInterfaceHttp,
  PropReturnDServiceDB,
  PropDefaultDInterfaceTimer,
} from "./pipedream"
import { string2 } from "../types"

type PropTypes = "string" | "boolean" | PipedreamPropTypes

type Prop<T> = PropOptions<T> | PropTypes | string2

type PropTypesDefault = PropDefaultDInterfaceTimer

type PropOptions<T = any> = {
  type?: PropTypes | string2
  label?: string
  description?: string
  default?: PropTypesDefault | { [key: string]: any } | string | null
  propDefinition?: [any, string]
  optional?: boolean
  options?: ((...args: any) => string[] | Promise<string[]>) | string[] | any[]
}

type ConvertPropTypes<T> = T extends null
  ? null
  : T extends { type: "string" } | "string"
  ? string
  : T extends { type: "boolean" } | "boolean"
  ? boolean
  : T extends { type: "string[]" } | "string[]"
  ? string[]
  : T extends { type: "$.interface.timer" } | "$.interface.timer"
  ? PropReturnDInterfaceTimer
  : T extends { type: "$.interface.http" } | "$.interface.http"
  ? PropReturnDInterfaceHttp
  : T extends { type: "$.service.db" } | "$.service.db"
  ? PropReturnDServiceDB
  : any

type PropOptionalCheck<T> = T extends { optional: true }
  ? ConvertPropTypes<T> | undefined
  : ConvertPropTypes<T>

export type ExtractPropTypes<P> = P extends object
  ? { [K in keyof P]: PropOptionalCheck<P[K]> }
  : { [K in string]: any }

export type InstancePropsOptions<P = Record<string, unknown>> =
  | {
      [K in keyof P]: Prop<P[K]> | null
    }
  | string[]
