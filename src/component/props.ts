import {
  PipedreamPropTypes,
  PropReturnDInterfaceTimer,
  PropReturnDInterfaceHttp,
  PropReturnDServiceDB,
  PropDefaultDInterfaceTimer,
} from "./pipedream"
import { string2 } from "../types"

type PropTypes =
  | "string"
  | "boolean"
  | "object"
  | "integer"
  | "any"
  | PipedreamPropTypes

type Prop<T> = PropOptions<T> | PropTypes | string2

type PropTypesDefault = PropDefaultDInterfaceTimer

// https://pipedream.com/docs/components/api/#general
type PropOptions<T = unknown> = {
  type?: PropTypes | string2
  label?: string
  description?: string
  default?: PropTypesDefault | { [key: string]: unknown } | string | null
  propDefinition?: [unknown, string]
  optional?: boolean
  options?:
    | ((...args: unknown[]) => string[] | Promise<string[]>)
    | string[]
    | unknown[]
  secret?: boolean
  min?: number
  max?: number
}

type ConvertPropTypes<T> = T extends null
  ? null
  : T extends { type: "string" } | "string"
  ? string
  : T extends { type: "boolean" } | "boolean"
  ? boolean
  : T extends { type: "object" } | "object"
  ? object
  : T extends { type: "integer" } | "integer"
  ? number
  : T extends { type: "any" } | "any"
  ? any
  : T extends { type: "string[]" } | "string[]"
  ? string[]
  : T extends { type: "number[]" } | "number[]"
  ? number[]
  : T extends { type: "object[]" } | "object[]"
  ? object[]
  : T extends { type: "$.interface.timer" } | "$.interface.timer"
  ? PropReturnDInterfaceTimer
  : T extends { type: "$.interface.http" } | "$.interface.http"
  ? PropReturnDInterfaceHttp
  : T extends { type: "$.service.db" } | "$.service.db"
  ? PropReturnDServiceDB
  : unknown

type PropOptionalCheck<T> = T extends { optional: true }
  ? ConvertPropTypes<T> | undefined
  : ConvertPropTypes<T>

export type ExtractPropTypes<P> = P extends object
  ? { [K in keyof P]: PropOptionalCheck<P[K]> }
  : { [K in string]: unknown }

export type InstancePropsOptions<P = Record<string, unknown>> =
  | {
      [K in keyof P]: Prop<P[K]> | null
    }
  | string[]
