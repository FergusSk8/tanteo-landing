import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../components/hero/hero.component';
import { ExperienceComponent } from "../components/experience/experience.component";
import { ContactFormComponent } from "../components/contact-form/contact-form.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeroComponent, ExperienceComponent, ContactFormComponent],
  templateUrl: './index.page.html',
})
export default class Home {}
