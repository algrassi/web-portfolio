import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project';
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [ ProjectsComponent, CommonModule ],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss'
})
export class ProjectSectionComponent {
  projects: Project[] = [];

  constructor() {
    this.projects = [
      {id: 1, name: 'Zenzero Card', photo: 'img/zenzero.jpg', shortDesc: 'Fidelity card for Zenzero Drink&Shop Segrate (MI)', status: 'On Hold'},
      {id: 1, name: 'City Log', photo: 'img/top-secret.jpg', shortDesc: 'Actually this is a secret project... will be revealed soon', status: 'On Hold'},
      {id: 1, name: 'Skiller', photo: 'img/skiller.jpg', shortDesc: 'Point&Click Game to discover your SoftSkills, made with UnrealEngine 4', status: 'Exited'},
      {id: 1, name: 'Creature Of Exo', photo: 'img/coe.jpg', shortDesc: 'The real card game but virtual, made with UnrealEngine 5', status: 'On Hold'},
    ];
  }
}
