/**
 * Created by alexvizcaino on 10/8/16.
 */
import {autoinject} from "aurelia-dependency-injection";
import {UserInfo} from "home-module";
import {Router} from "aurelia-router";
import {RouterConfiguration} from "aurelia-router";
import {EventAggregator} from "aurelia-event-aggregator";
import {GlobalEvents} from "./common/global-events";
import {HomeService} from "./routes/home/services/local-service";

@autoinject
export class HomeViewModel{
  public router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Alex Vizcaino';
    config.map([
      { route: ['', 'home'],   name: 'home',         moduleId: 'routes/home/views/main',         nav: false, title: 'Personal Info' },
      { route: 'education',    name: 'education',    moduleId: 'routes/education/views/main',    nav: true, title: 'Education' },
      { route: 'work',         name: 'work',         moduleId: 'routes/work/views/main',         nav: true, title: 'Work Experience' },
      { route: 'publications', name: 'publications', moduleId: 'routes/publications/views/main', nav: true, title: 'Publications' }
      //{ route: 'personal',   name: 'personal',     moduleId: 'routes/personal/views/main',     nav: true, title: 'Personal' }
    ]);

    this.router = router;
  }

  public userInfo: UserInfo;

  constructor(private _service: HomeService, private _ea: EventAggregator){}

  activate(){
    this._ea.subscribe(GlobalEvents.navigation, this.navigateTo.bind(this));
    return this._service.getUserInfo()
      .then(r => this.userInfo = r);
  }

  private navigateTo(route: string){
    this.router.navigate(route);
  }
}
