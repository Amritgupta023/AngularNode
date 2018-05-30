import { Component } from '@angular/core';
import { FirstService } from './services/first.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private FirstService:FirstService) {

  }

  onClickButton(){
    //console.log("onClick Button",FirstService);
    this.FirstService.getJson().subscribe(
      res=>{
        console.log("The res will be:",res);
      }
    )
  }
}
