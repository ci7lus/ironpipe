import { ObjectLiteral, string2 } from "../types"

// https://github.com/PipedreamHQ/pipedream/blob/master/COMPONENT-API.md

export type ArgEventTypes =
  | ArgEventBase
  | ArgEventInterval
  | ArgEventCron
  | ArgEventHttp

export type ArgEventBase = { timestamp: number }
export type ArgEventInterval = ArgEventBase & { interval_seconds: number }
export type ArgEventCron = ArgEventBase & { cron: string }
export type ArgEventHttp = {
  method: "POST" | "GET" | string2
  path: string
  query: ObjectLiteral
  headers: ObjectLiteral
  bodyRaw: string
  body: unknown
}

export type PipedreamPropTypes =
  | "$.interface.timer"
  | "$.interface.http"
  | "$.service.db"

export type PropReturnDInterfaceTimer = {
  type: "$.interface.timer"
}

export type PropDefaultDInterfaceTimer =
  | {
      intervalSeconds: number
    }
  | { cron: string }

export type PropReturnDInterfaceHttp = {
  respond<T = unknown>(options: {
    status?: number
    headers?: ObjectLiteral
    body?: T
    [key: string]: unknown
  }): void
  endpoint: string
}

export type PropReturnDServiceDB = {
  get: <T = unknown>(key: string) => T | undefined
  set: <T>(key: string, value: T) => void
}
