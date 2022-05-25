import { ComponentOptions } from "./component"
import { ActionOptions } from "./action"
import { ExtractPropTypes } from "./props"

export function createComponent<Component extends ComponentOptions>(
  component: Component,
  props: Readonly<ExtractPropTypes<Component["props"]>>
): Component {
  return Object.create(
    Object.assign(
      {
        run: component.run,
        name: component.name,
        description: component.description,
        type: component.type,
        version: component.version,
        dedupe: component.dedupe,
        // TODO: hooks
        // hooks?: {
        //     activate: Function;
        //     deactivate: Function;
        //     deploy: Function;
        //     [key: string]: Function;
        // }
      },
      props,
      component.methods
    )
  )
}

export function createAction<Action extends ActionOptions>(
  action: Action,
  props: Readonly<ExtractPropTypes<Action["props"]>>
): Action {
  return Object.create(
    Object.assign(
      {
        run: action.run,
        name: action.name,
        description: action.description,
        type: action.type,
        version: action.version,
        // TODO: hooks
        // hooks?: {
        //     activate: Function;
        //     deactivate: Function;
        //     deploy: Function;
        //     [key: string]: Function;
        // }
      },
      props,
      action.methods
    )
  )
}
