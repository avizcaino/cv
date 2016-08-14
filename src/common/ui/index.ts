/**
 * Created by alexvizcaino on 10/8/16.
 */
import {FrameworkConfiguration} from "aurelia-framework";
export function configure(fc:FrameworkConfiguration) {
  fc.globalResources([
    './converters/common',
    './converters/from-boolean',
    './converters/date-converters',
    './converters/social-converters',
    './behaviors/background-image',
    './behaviors/full-height'
  ]);
}
