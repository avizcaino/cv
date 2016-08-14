/**
 * Created by alexvizcaino on 10/8/16.
 */
import {autoinject} from "aurelia-dependency-injection";
import {Publications} from "publications-module";
import {PublicationsService} from "../services/local-service";

@autoinject
export class PublicationsViewModel{
  public publications: Publications[];
  constructor(private _service: PublicationsService){}

  activate(){
    return this._service.getPublications()
      .then(r => this.publications = r);
  }
}
