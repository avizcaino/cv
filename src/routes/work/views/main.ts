/**
 * Created by alexvizcaino on 10/8/16.
 */
import {autoinject} from "aurelia-dependency-injection";
import {Work} from "work-module";
import {WorkService} from "../services/local-service";

@autoinject
export class WorkViewModel{
  public workExperience: Work[];

  constructor(private _service: WorkService){}

  activate(){
    return this._service.getWork()
      .then(r => this.workExperience = r);
  }
}
