import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project';
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [ProjectsComponent, CommonModule],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectSectionComponent {
  projects: Project[] = [
    {
      id: 1,
      name: 'Zenzero Card - iOS',
      shortDesc: 'Fidelity card app for Zenzero Drink&Shop, Segrate (MI)',
      status: 'live',
      tags: ['Flutter', 'Dart', 'Firebase'],
    },
    {
      id: 2,
      name: 'City Log',
      shortDesc: 'Secret project — details will be revealed soon',
      status: 'Exited',
      tags: ['TBD'],
    },
    {
      id: 3,
      name: 'Skiller',
      shortDesc: 'Point & Click game to discover your Soft Skills, built with Unreal Engine 4',
      status: 'Exited',
      tags: ['Unreal Engine 4', 'C++', 'Game Design'],
    },
    {
      id: 4,
      name: 'Creature of Exo - Deck Builder',
      shortDesc: 'A Website to build your card deck for the TCG Creature of Exo',
      status: 'On Hold',
      tags: ['React', 'Tailwind', 'Vite', 'Claude Code'],
    },
  ];

  trackById(_: number, proj: Project): number {
    return proj.id;
  }
}
