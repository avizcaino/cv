/**
 * Created by alexvizcaino on 13/8/16.
 */
import {customAttribute} from "aurelia-templating";
import {bindable} from "aurelia-templating";
import {autoinject} from "aurelia-dependency-injection";

@customAttribute('full-height')
@autoinject
export class FullHeight{
  @bindable navigation: any;

  constructor(private _element: Element){}

  attached(){
    this.getHeight();
  }

  navigationChanged(newValue){
    this.getHeight();
  }

  private getHeight(){

  }
}
