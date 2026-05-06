import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NetworkBackgroundComponent } from '../network-background/network-background.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink, NetworkBackgroundComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {}
