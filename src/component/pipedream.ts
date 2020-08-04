import { ObjectLiteral } from "../types"

// https://github.com/PipedreamHQ/pipedream/blob/master/COMPONENT-API.md

export type PipedreamPropTypes =
  | "$.interface.timer"
  | "$.interface.http"
  | "$.service.db"

export type PropReturnDInterfaceTimer = {}

export type PropDefaultDInterfaceTimer = {
  intervalSeconds: number
}

export type PropReturnDInterfaceHttp = {
  respond(options: {
    status: number
    headers: ObjectLiteral
    body: string | object | Buffer
    [key: string]: any
  }): void
}

export type PropReturnDServiceDB = {
  get: <T = any>(key: string) => T | undefined
  set: <T>(key: string, value: T) => void
}
