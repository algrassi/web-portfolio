import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Programmer Analyst',
      company: 'Master Information S.r.l',
      period: '2025 — Present',
      location: 'Hybrid',
      description: 'Build new software in Shiny and R to analyze, transform and present financial data to our partners. Also improving personal knowledge on AI Agents to bring a new point of view on Jobs Automation.',
      tags: ['R', 'Shiny', 'Python', 'VBA', 'AccessDB', 'Excel', 'MSSQL'],
      current: true,
    },
    {
      role: 'Flutter Mobile Developer',
      company: 'Fantini Cosmi S.p.A',
      period: '2021 — 2025',
      location: 'Caleppio di Settala, IT',
      description: 'Designing and shipping the new Flutter mobile app from scratch, working side by side with our UX/UI expert, smooth animations with Rive, and cross-platform performance. Also maintaining the old app written in Cordova to make the transition as smooth as possible.',
      tags: ['Flutter', 'Dart', 'Rive', 'Figma', 'UX/UI'],
    },
    {
      role: 'Full Stack Developer',
      company: 'Engineering S.p.A',
      period: '2015 — 2021',
      location: 'Milan, IT',
      description: 'Built and maintained enterprise web applications for major financial partners including Fiditalia and Generali Italia. Led frontend and backend development across Java, Spring, and Angular stacks. Worked within Agile and Waterfall methodologies.',
      tags: ['Java', 'Spring Framework', 'Angular', 'PHP', 'Docker', 'Azure DevOps'],
    },
  ];

  trackByRole(_: number, exp: Experience): string {
    return exp.role;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
