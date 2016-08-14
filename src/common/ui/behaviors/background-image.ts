/**
 * Created by alexvizcaino on 2/8/16.
 */
import {autoinject} from "aurelia-dependency-injection";
import {customAttribute} from "aurelia-templating";
import {bindable} from "aurelia-templating";

@customAttribute('background-image')
@autoinject
export class BackgroundImage{
  @bindable image: string;

  constructor(private _element: Element){}

  imageChanged(newImage: string){
    this.setBackgroundImage();
  }

  private setBackgroundImage(){
    if(this.image != '')
      (<HTMLElement>this._element).style.backgroundImage = "url(" + this.image + ")";
  }
}
