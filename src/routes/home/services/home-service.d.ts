/**
 * Created by alexvizcaino on 10/8/16.
 */
declare module 'home-service'{
  import {UserInfo} from "home-module";
  export interface IHomeService{
    getUserInfo(): Promise<UserInfo>;
  }

  export class HomeService implements IHomeService{
    getUserInfo(): Promise<UserInfo>;
  }
}
