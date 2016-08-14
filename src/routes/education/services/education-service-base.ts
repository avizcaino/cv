/**
 * Created by alexvizcaino on 11/8/16.
 */
import {IEducationService} from "education-service";
import {autoinject} from "aurelia-dependency-injection";
import {HttpClient} from "aurelia-fetch-client";
import {Education} from "education-module";

@autoinject
export class EducationServiceBase implements IEducationService{
  private _cachedEducation: Education[];
  private _getEducationPromise: Promise<Education[]>;

  constructor(private _httpClient: HttpClient){}

  protected educationUrl: string;

  getEducation(): Promise<Education[]>{
    return this._httpClient.fetch(this.getRequest())
      .then(r => r.json())
      .then(r => this.adaptResources(r))
      .then(r => this._cachedEducation = r);
  }

  protected getRequest(): Request | any{
    return this.educationUrl;
  }

  protected adaptResources(r): Education[]{
    return r;
  }
}
