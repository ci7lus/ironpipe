import {
  ComponentInstance,
  ComponentOptions,
} from "./component";
import { ActionOptions, ActionInstance } from "./action";
import { ExtractPropTypes } from "./props";

export function createComponent<Comp extends ComponentOptions>(
  comp: Comp,
  props: Readonly<ExtractPropTypes<Comp["props"]>>
): ComponentInstance {
  return Object.create(
    Object.assign(
      {
        run: comp.run,
        name: comp.name,
        description: comp.description,
        type: comp.type,
        version: comp.version,
        dedupe: comp.dedupe,
        // TODO: hooks
        // hooks?: {
        //     activate: Function;
        //     deactivate: Function;
        //     deploy: Function;
        //     [key: string]: Function;
        // }
      },
      props,
      comp.methods
    )
  ) as ComponentInstance;
}

export function createAction<Comp extends ActionOptions>(
  comp: Comp,
  props: Readonly<ExtractPropTypes<Comp["props"]>>
): ActionInstance {
  return Object.create(
    Object.assign(
      {
        run: comp.run,
        name: comp.name,
        description: comp.description,
        type: comp.type,
        version: comp.version,
        // TODO: hooks
        // hooks?: {
        //     activate: Function;
        //     deactivate: Function;
        //     deploy: Function;
        //     [key: string]: Function;
        // }
      },
      props,
      comp.methods
    )
  ) as ActionInstance;
}
