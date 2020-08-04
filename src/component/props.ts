import {
  PipedreamPropTypes,
  PropReturnDInterfaceTimer,
  PropReturnDInterfaceHttp,
  PropReturnDServiceDB,
  PropDefaultDInterfaceTimer,
} from "./pipedream"

type PropTypes = "string" | "number" | PipedreamPropTypes

type Prop<T> = PropOptions<T> | PropTypes

type PropTypesDefault = PropDefaultDInterfaceTimer | { [key: string]: any }

type PropOptions<T = any> = {
  type?: PropTypes | String
  label?: string
  description?: string
  default?: PropTypesDefault | null
  propDefinition?: T[]
}

type ConvertPropTypes<T> = T extends null
  ? null
  : T extends { type: "string" } | "string"
  ? string
  : T extends { type: "number" } | "number"
  ? number
  : T extends { type: "$.interface.timer" } | "$.interface.timer"
  ? PropReturnDInterfaceTimer
  : T extends { type: "$.interface.http" } | "$.interface.http"
  ? PropReturnDInterfaceHttp
  : T extends { type: "$.service.db" } | "$.service.db"
  ? PropReturnDServiceDB
  : any

export type ExtractPropTypes<P> = P extends object
  ? { [K in keyof P]: ConvertPropTypes<P[K]> }
  : { [K in string]: any }

export type ComponentPropsOptions<P = Record<string, unknown>> =
  | {
      [K in keyof P]: Prop<P[K]> | null
    }
  | string[]
