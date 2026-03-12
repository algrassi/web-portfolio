import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  @Input() project!: Project;

  trackByIndex(index: number): number {
    return index;
  }
}
