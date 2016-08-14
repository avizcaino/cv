/**
 * Created by alexvizcaino on 11/8/16.
 */
declare module 'publications-service'{
  import {Publications} from "publications-module";
  export interface IPublicationsService{
    getPublications(): Promise<Publications[]>;
  }

  export class PublicationsService implements IPublicationsService{
    getPublications(): Promise<Publications[]>;
  }
}
