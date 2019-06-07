import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  sliders = [{imagePath:'https://rawgit.com/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/images/slider2.jpg', label:'Car label', text:'Car text'},{imagePath:'https://rawgit.com/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/images/slider2.jpg', label:'Car label2', text:'Car text2'},{imagePath:'https://rawgit.com/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/images/slider2.jpg', label:'Car label3', text:'Car text3'}];
}
