/**
 * Created by alexvizcaino on 10/8/16.
 */
declare module 'home-module'{
  export interface UserInfo{
    name: string,
    position: string,
    address: string,
    birthDate: string,
    phone: string,
    mail: string[],
    site: string,
    bio: string,
    pic: string,
    social: Social[]
  }

  export interface Social{
    network: string,
    id: string,
    url: string
  }
}
