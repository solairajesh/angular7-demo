import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

    private bannerData;

  @Input()
    set toysList(toysList) {
      this.getBanners(toysList);
    }
    // get toysList() {
    //   return this.banners;
    // }

  constructor() { }

  ngOnInit() {
    //this.getBanners();
  }

  getBanners(toysList) {
    this.bannerData = toysList.filter((toy, index) => {
      if(toy.bannerImageUrl){
        return true;
      }
    });
  }

}