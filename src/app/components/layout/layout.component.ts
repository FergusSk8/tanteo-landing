import { Component, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((val) => !val);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
