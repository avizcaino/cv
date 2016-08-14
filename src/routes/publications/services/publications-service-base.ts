/**
 * Created by alexvizcaino on 11/8/16.
 */
import {IPublicationsService} from "publications-service";
import {autoinject} from "aurelia-dependency-injection";
import {HttpClient} from "aurelia-fetch-client";
import {Publications} from "publications-module";

@autoinject
export class PublicationsServiceBase implements IPublicationsService{
  private _cachedPublications: Publications[];
  private _getPublicationsPromise: Promise<Publications[]>;

  constructor(private _httpClient: HttpClient){}

  protected publicationsUrl: string;

  getPublications(): Promise<Publications[]>{
    return this._httpClient.fetch(this.getRequest())
      .then(r => r.json())
      .then(r => this.adaptResources(r))
      .then(r => this._cachedPublications = r);
  }

  protected getRequest(): Request | any{
    return this.publicationsUrl;
  }

  protected adaptResources(r): Publications[]{
    return r;
  }
}
