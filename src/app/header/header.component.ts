import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentUrl;
  constructor(
    private router: Router
  ) {
    router.events.subscribe(() => {
      this.currentUrl = router.url;
    });
  }
}