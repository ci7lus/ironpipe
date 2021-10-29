import { ObjectLiteral } from "../types"

export type InstanceThis<Props, Methods> = ThisType<
  {
    $props: Props
    // https://pipedream.com/docs/components/api/#emit
    $emit: (
      data: ObjectLiteral,
      metadata?: ObjectLiteral & {
        id?: string | number // metadata requires id
        name?: string
        summary?: string
        ts?: number
      }
    ) => void
  } & Props &
    Methods &
    ObjectLiteral
>
