import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basic';

  value:string ='';

  onClick(inputString : string){
this.value = inputString;
  }

  onSearch(inputString : string){
  this.value = inputString;
  }
}
