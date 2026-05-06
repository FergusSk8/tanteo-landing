import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

@Component({
  selector: 'app-network-background',
  standalone: true,
  template: `
    <canvas #canvasRef class="absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true"></canvas>
  `,
  styles: [`
    :host {
      display: block;
      position: absolute;
      inset: 0;
      z-index: 0;
    }
  `]
})
export class NetworkBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasRef') canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private platformId = inject(PLATFORM_ID);
  private animationFrameId?: number;
  private points: Point[] = [];
  private ctx?: CanvasRenderingContext2D | null;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initCanvas();
    }
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    if (!this.ctx) return;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.draw();
  }

  private resize() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    this.initPoints();
  }

  private initPoints() {
    const canvas = this.canvasRef.nativeElement;
    const numPoints = Math.floor((canvas.width * canvas.height) / 15000);
    this.points = [];
    for (let i = 0; i < numPoints; i++) {
      this.points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }
  }

  private draw() {
    if (!this.ctx) return;
    const canvas = this.canvasRef.nativeElement;
    
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw points
    this.points.forEach((point) => {
      point.x += point.vx;
      point.y += point.vy;

      // Bounce off edges
      if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
      if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

      // Draw point
      this.ctx!.beginPath();
      this.ctx!.arc(point.x, point.y, 2, 0, Math.PI * 2);
      this.ctx!.fillStyle = "rgba(100, 116, 139, 0.3)";
      this.ctx!.fill();
    });

    // Draw connections
    const maxDistance = 150;
    for (let i = 0; i < this.points.length; i++) {
      for (let j = i + 1; j < this.points.length; j++) {
        const dx = this.points[i].x - this.points[j].x;
        const dy = this.points[i].y - this.points[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          this.ctx!.beginPath();
          this.ctx!.moveTo(this.points[i].x, this.points[i].y);
          this.ctx!.lineTo(this.points[j].x, this.points[j].y);
          const opacity = (1 - distance / maxDistance) * 0.15;
          this.ctx!.strokeStyle = `rgba(100, 116, 139, ${opacity})`;
          this.ctx!.lineWidth = 1;
          this.ctx!.stroke();
        }
      }
    }

    this.animationFrameId = requestAnimationFrame(() => this.draw());
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', () => this.resize());
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
    }
  }
}
