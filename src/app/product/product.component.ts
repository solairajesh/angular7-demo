import { Component, OnInit } from '@angular/core';
import { ToyService } from '../toy.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  toysList;

  constructor(
    private toyService: ToyService
  ) { }

  ngOnInit() {
    this.getToys();
  }

  getToys() {
    this.toyService.getToys()
      .subscribe((toysData) => {
        this.toysList = toysData;
      })
  }

}