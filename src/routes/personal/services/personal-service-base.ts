/**
 * Created by alexvizcaino on 19/8/16.
 */
import {IPersonalService} from "personal-service";
import {autoinject} from "aurelia-dependency-injection";
import {PersonalSkills} from "persona-module";
import {Certification} from "persona-module";
import {Award} from "persona-module";
import {HttpClient} from "aurelia-fetch-client";

@autoinject
export class PersonalServiceBase implements IPersonalService{
  private _cachedPersonalSkills: PersonalSkills;
  private _cachedAwards: Award[];
  private _cachedCertifications: Certification[];
  private _getPersonalSkillsPromise: Promise<PersonalSkills>;
  private _getAwardsPromise: Promise<Award[]>;
  private _getCertificationsPromise: Promise<Certification[]>;

  constructor(private _httpClient: HttpClient){}

  protected personalSkillsUrl: string;
  protected awardsUrl: string;
  protected certificationsUrl: string;

  getSkills(): Promise<PersonalSkills>{
    return null;
  }

  getAwards(): Promise<Award[]>{
    return null;
  }

  getCertifications(): Promise<Certification[]>{
    return null;
  }

  protected callService(info: string){
    return this._httpClient.fetch(this.getRequest(info))
      .then(r => r.json())
      .then(r => this.adaptResources(r))
      .then(r => {
        switch(info){
          case 'personal-skills':
            return this._cachedPersonalSkills = r;
          case 'awards':
            return this._cachedAwards = r;
          case 'certifications':
            return this._cachedCertifications = r;
        }
      });
  }

  protected getRequest(info: string){
    switch(info){
      case 'personal-skills':
        return this.personalSkillsUrl;
      case 'awards':
        return this.awardsUrl;
      case 'certifications':
        return this.certificationsUrl;
    }
  }

  protected adaptResources(r): any{
    return r;
  }

}
