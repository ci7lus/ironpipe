import { ObjectLiteral, string2 } from "../types"

// https://github.com/PipedreamHQ/pipedream/blob/master/COMPONENT-API.md

export type ArgEventTypes = ArgEventBase | ArgEventInterval | ArgEventHttp

export type ArgEventBase = { timestamp: number }
export type ArgEventInterval = ArgEventBase & { interval_seconds: number }
export type ArgEventHttp = {
  method: "POST" | "GET" | string2
  path: string
  query: ObjectLiteral
  headers: ObjectLiteral
  bodyRaw: string
  body: any
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
  respond(options: {
    status?: number
    headers?: ObjectLiteral
    body?: any
    [key: string]: any
  }): void
  endpoint: string
}

export type PropReturnDServiceDB = {
  get: <T = any>(key: string) => T | undefined
  set: <T>(key: string, value: T) => void
}
