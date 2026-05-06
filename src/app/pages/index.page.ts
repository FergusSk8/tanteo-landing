import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../components/hero/hero.component';
import { ExperienceComponent } from "../components/experience/experience.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeroComponent, ExperienceComponent],
  templateUrl: './index.page.html',
})
export default class Home {}
