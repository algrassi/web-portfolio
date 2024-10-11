import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { HeroSkillsComponent } from '../hero-skills/hero-skills.component';
import { SkillsComponent } from '../skills/skills.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectSectionComponent } from '../project-section/project-section.component';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, HeroSkillsComponent, SkillsComponent, ProjectSectionComponent, FooterComponent, ContactsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
