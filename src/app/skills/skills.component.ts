import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  webDevTools: string[];
  mobileDevTools: string[];

  constructor() {
    this.webDevTools = ['GitHub', 'SourceTree', 'NodeJS', 'Docker', 'Eclipse', 'Bulma', 'VS Code', 'Spring Framework', 'Bootstrap', 'Azure DevOps', 'ClickUp', 'Agile & Waterfall methods'];
    this.mobileDevTools = ['GitHub', 'SourceTree', 'Flutter', 'Cordova', 'Material Desing 3', 'Figma', 'Rive', 'Docker', 'VS Code', 'Azure DevOps', 'ClickUp', 'Agile & Waterfall methods'];
  }
}