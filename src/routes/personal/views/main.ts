/**
 * Created by alexvizcaino on 19/8/16.
 */
import {autoinject} from "aurelia-dependency-injection";
import {PersonalService} from "../services/local-service";
import {PersonalSkills} from "persona-module";
import {Award} from "persona-module";
import {Certification} from "persona-module";

@autoinject
export class PersonalViewModel{
  public skills: PersonalSkills;
  public awards: Award[];
  public certifications: Certification[];

  constructor(private _service: PersonalService){}

  activate(){
    let promises = [];
    promises.push(this._service.getSkills());
    promises.push(this._service.getAwards());
    promises.push(this._service.getCertifications());

    return Promise.all(promises).then(r => {
      this.skills = r[0];
      this.awards = r[1];
      this.certifications = r[2];
      return r;
    });
  }
}
