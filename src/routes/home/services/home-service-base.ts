/**
 * Created by alexvizcaino on 10/8/16.
 */
import {IHomeService} from "home-service";
import {autoinject} from "aurelia-dependency-injection";
import {HttpClient} from "aurelia-fetch-client";
import {UserInfo} from "home-module";

@autoinject
export class HomeServiceBase implements IHomeService{
  private _cachedUserInfo: UserInfo;
  private _getUserInfoPromise: Promise<UserInfo>;

  constructor(private _httpClient: HttpClient){}

  protected userInfoUrl: string;

  getUserInfo(): Promise<UserInfo>{
    return this._httpClient.fetch(this.getRequest())
      .then(r => r.json())
      .then(r => this.adaptResources(r))
      .then(r => this._cachedUserInfo = r);
  }

  protected getRequest(): Request | any{
    return this.userInfoUrl;
  }

  protected adaptResources(r): UserInfo{
    return r;
  }
}
