import { Component ,AfterViewInit} from '@angular/core';
import { JoyrideService }from 'ngx-joyride';
import { routes } from './app.module';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  routes = routes;
  isFirst = true;
  constructor(private joyride: JoyrideService) { 
   
  }
  name = 'Angular';
  
  start(){
    this.joyride.startTour(
      { steps: ['welcome','box1', 'box2']}
    )
  }

  ngAfterViewInit() {
    if(this.isFirst) {
      this.start()
    }
  }

}
