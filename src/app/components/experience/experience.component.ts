import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCE_STATS, EXPERIENCE_FEATURES } from '../../fixtures/experience.fixture';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  stats = EXPERIENCE_STATS;
  features = EXPERIENCE_FEATURES;
}

