/**
 * Created by alexvizcaino on 22/8/16.
 */
import {HomeService} from "../services/local-service";
import {autoinject} from "aurelia-dependency-injection";
import {UserInfo} from "home-module";

@autoinject
export class HomeViewModel{
  public userInfo: UserInfo;
  constructor(private _service: HomeService){}

  activate(){
    return this._service.getUserInfo()
      .then(r => this.userInfo = r);
  }
}
