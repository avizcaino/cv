/**
 * Created by alexvizcaino on 10/8/16.
 */
import {autoinject} from "aurelia-dependency-injection";
import {EducationService} from "../services/local-service";
import {Education} from "education-module";

@autoinject
export class EducationViewModel{
  public education: Education[];
  constructor(private _service: EducationService){}

  activate(){
    return this._service.getEducation()
      .then(r => this.education = r);
  }
}
