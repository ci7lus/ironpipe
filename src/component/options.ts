import { ObjectLiteral } from "../types"

export type InstanceThis<Props, Methods> = ThisType<
  {
    $props: Props
    $emit: (
      data: ObjectLiteral,
      metadata?: ObjectLiteral & { id: unknown } // metadata requires id
    ) => void
  } & Props &
    Methods &
    ObjectLiteral
>
