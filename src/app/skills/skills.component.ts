import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  label: string;
  tags: string[];
}

interface SoftSkill {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  hardSkillGroups: SkillGroup[] = [
    {
      label: 'Languages',
      tags: ['HTML', 'CSS', 'SASS', 'TypeScript', 'JavaScript', 'Java', 'PHP', 'Dart', 'R', 'Python', 'VBA'],
    },
    {
      label: 'Frameworks & Libraries',
      tags: ['Angular', 'Flutter', 'Spring Framework', 'Shiny', 'NodeJS', 'Cordova', 'Bootstrap', 'Bulma', 'Material Design 3'],
    },
    {
      label: 'Tools & Platforms',
      tags: ['Docker', 'GitHub', 'Figma', 'Rive', 'Azure DevOps', 'VS Code', 'Unreal Engine 5', 'ClickUp', 'SourceTree'],
    },
    {
      label: 'Data & Databases',
      tags: ['MSSQL', 'AccessDB', 'Excel', 'R Shiny Dashboards'],
    },
  ];

  softSkills: SoftSkill[] = [
    { icon: 'fa-puzzle-piece',   label: 'Problem Solving' },
    { icon: 'fa-arrows-spin',    label: 'Agile & Waterfall' },
    { icon: 'fa-users',          label: 'Team Collaboration' },
    { icon: 'fa-book-open',      label: 'Continuous Learning' },
    { icon: 'fa-pen-ruler',      label: 'UX Mindset' },
    { icon: 'fa-comments',       label: 'Cross-functional Communication' },
  ];

  trackByLabel(_: number, group: SkillGroup): string {
    return group.label;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
