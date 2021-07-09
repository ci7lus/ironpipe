import { InstancePropsOptions } from "./props"
import { MethodOptions } from "./methods"
import { ComponentOptions } from "./component"
import { ActionOptions } from "./action"

export function defineComponent<
  PropsOptions extends Readonly<InstancePropsOptions>,
  Methods extends MethodOptions = {}
>(
  options: ComponentOptions<PropsOptions, Methods>
): ComponentOptions<PropsOptions, Methods>

export function defineComponent(options: unknown) {
  return options
}

/**
 * The typing of this function is based on @vue/runtime-core@3
 * https://github.com/vuejs/vue-next/blob/83428fb84452a684b937fec0cb26517aa13563af/packages/runtime-core/README.md
 */

export function defineAction<
  PropsOptions extends Readonly<InstancePropsOptions>,
  Methods extends MethodOptions = {}
>(
  options: ActionOptions<PropsOptions, Methods>
): ActionOptions<PropsOptions, Methods>

export function defineAction(options: unknown) {
  return options
}
