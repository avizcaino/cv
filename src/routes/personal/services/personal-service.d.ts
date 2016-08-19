/**
 * Created by alexvizcaino on 19/8/16.
 */
declare module 'personal-service'{
  import {PersonalSkills} from "persona-module";
  import {Award} from "persona-module";
  import {Certification} from "persona-module";

  export interface IPersonalService{
    getAwards(): Promise<Award[]>
    getSkills(): Promise<PersonalSkills>;
    getCertifications(): Promise<Certification[]>;
  }

  export class PersonalService{
    getAwards(): Promise<Award[]>
    getSkills(): Promise<PersonalSkills>;
    getCertifications(): Promise<Certification[]>;
  }
}
