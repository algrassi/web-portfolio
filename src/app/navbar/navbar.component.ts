import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 40;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
