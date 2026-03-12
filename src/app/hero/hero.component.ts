import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
