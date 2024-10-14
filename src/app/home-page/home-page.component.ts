import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroComponent } from "../hero/hero.component";
import { HeroSkillsComponent } from "../hero-skills/hero-skills.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectSectionComponent } from "../project-section/project-section.component";
import { ContactsComponent } from "../contacts/contacts.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, HeroSkillsComponent, SkillsComponent, ProjectSectionComponent, ContactsComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
