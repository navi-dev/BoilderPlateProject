import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  public pushRightClass: string;
  constructor(public router: Router) { }

  ngOnInit() {
    this.pushRightClass = 'push-right';
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  onLoggedout() {
    this.router.navigateByUrl('/login');
  }

  changeLang(language: string) {
  }
}
