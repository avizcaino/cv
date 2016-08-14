/**
 * Created by alexvizcaino on 11/8/16.
 */
declare module 'work-service'{
  import {Work} from "work-module";
  export interface IWorkService{
    getWork(): Promise<Work[]>;
  }

  export class WorkService implements IWorkService{
    getWork(): Promise<Work[]>;
  }
}
