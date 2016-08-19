/**
 * Created by alexvizcaino on 10/8/16.
 */
import {PersonalServiceBase} from "./personal-service-base";
export class PersonalService extends PersonalServiceBase{
  protected personalSkillsUrl: string = 'test-data/personal-skills.json';
  protected awardsUrl: string = 'test-data/awards.json';
  protected cerrtificationsUrl: string = 'test-data/certifications.json';
}
