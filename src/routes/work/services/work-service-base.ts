/**
 * Created by alexvizcaino on 11/8/16.
 */
import {IWorkService} from "work-service";
import {autoinject} from "aurelia-dependency-injection";
import {Work} from "work-module";
import {HttpClient} from "aurelia-fetch-client";

@autoinject
export class WorkServiceBase implements IWorkService{
  private _cachedWork: Work[];
  private _getWorkPromise: Promise<Work[]>;

  constructor(private _httpClient: HttpClient){}

  protected workUrl: string;

  getWork(): Promise<Work[]>{
    return this._httpClient.fetch(this.getRequest())
      .then(r => r.json())
      .then(r => this.adaptResources(r))
      .then(r => this._cachedWork = r);
  }

  protected getRequest(): Request | any{
    return this.workUrl;
  }

  protected adaptResources(r): Work[]{
    return r;
  }
}
