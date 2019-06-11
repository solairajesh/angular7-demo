import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent implements OnInit {

  @Input() toysList;

  constructor(

  ) { }

  ngOnInit() {
    //this.getToys();
  }

  // getToys() {
  //   this.toyService.getToys()
  //     .subscribe(toysData => {
  //       this.toysList = toysData;
  //     });
  // }

}