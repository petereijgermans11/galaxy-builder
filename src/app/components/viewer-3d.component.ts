import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  viewChild,
  effect,
  ChangeDetectionStrategy,
} from '@angular/core';
import { SceneService } from '../services/scene.service';

/**
 * Viewer3DComponent displays the Three.js 3D scene
 * Workshop TODO: Add camera controls, zoom, pan, rotate
 */
@Component({
  selector: 'app-viewer-3d',
  imports: [],
  template: `
    <div class="viewer-container">
      <canvas #canvas class="viewer-canvas"></canvas>
      <div class="viewer-info">
        <div class="info-badge">Objects: {{ sceneService.objectCount() }}</div>
        @if (!sceneService.isInitialized()) {
          <div class="info-badge">Initializing...</div>
        }
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }

    .viewer-container {
      position: relative;
      width: 100%;
      height: 100%;
      background: radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f1e 100%);
    }

    .viewer-canvas {
      width: 100%;
      height: 100%;
      display: block;
    }

    .viewer-info {
      position: absolute;
      top: 1rem;
      right: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      pointer-events: none;
    }

    .info-badge {
      background: rgba(0, 0, 0, 0.7);
      color: #00ff88;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      font-family: 'Courier New', monospace;
      font-size: 0.875rem;
      border: 1px solid rgba(0, 255, 136, 0.3);
      backdrop-filter: blur(10px);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Viewer3DComponent implements OnInit, OnDestroy {
  protected readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  constructor(protected readonly sceneService: SceneService) {
    // React to scene initialization
    effect(() => {
      if (this.sceneService.isInitialized()) {
        console.log('Scene initialized with', this.sceneService.objectCount(), 'objects');
      }
    });
  }

  ngOnInit(): void {
    const canvasElement = this.canvas().nativeElement;
    this.sceneService.initScene(canvasElement);

    // Handle window resize
    window.addEventListener('resize', this.handleResize);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.handleResize);
    this.sceneService.dispose();
  }

  private handleResize = (): void => {
    const canvasElement = this.canvas().nativeElement;
    this.sceneService.onResize(canvasElement.clientWidth, canvasElement.clientHeight);
  };
}
