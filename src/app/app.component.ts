import { Component } from '@angular/core';
// import { ToyService } from './toy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toysList;

  constructor(
    // private toyService: ToyService
  ) { }

  ngOnInit() {
    // this.getToys();
  }

  // getToys() {
  //   this.toyService.getToys()
  //     .subscribe(toysData => {
  //       this.toysList = toysData;
  //     });
  // }
}
