/**
 * Created by alexvizcaino on 11/8/16.
 */
declare module 'education-service'{
  import {Education} from "education-module";
  export interface IEducationService{
    getEducation(): Promise<Education[]>;
  }

  export class EducationService implements IEducationService{
    getEducation(): Promise<Education[]>;
  }
}
