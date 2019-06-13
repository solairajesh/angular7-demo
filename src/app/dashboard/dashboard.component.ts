import { Component, OnInit } from '@angular/core';
import { ToyService } from '../toy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  toysList;

  constructor(
    private toyService: ToyService
  ) { }

  ngOnInit() {
    this.getToys();
  }

  getToys() {
    this.toyService.getToys()
      .subscribe(toysData => {
        this.toysList = toysData;
      });
  }

}