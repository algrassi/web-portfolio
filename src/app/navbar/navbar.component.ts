import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  test() {
    let navMenu = document.getElementById('navMenu');
    let navBurger = document.getElementById('navBurger');

    let isActiveMenu = navBurger!.classList.contains('is-active');

    if(isActiveMenu) {
      navMenu!.classList.remove('is-active');
      navBurger!.classList.remove('is-active');
    } else {
      navMenu!.classList.add('is-active');
      navBurger!.classList.add('is-active');
    }
  }
}
