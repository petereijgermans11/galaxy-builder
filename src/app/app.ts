import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommandInputComponent } from './components/command-input.component';
import { Viewer3DComponent } from './components/viewer-3d.component';
import { AIService } from './services/ai.service';
import { SceneService } from './services/scene.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommandInputComponent, Viewer3DComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  constructor(
    private readonly sceneService: SceneService,
    private readonly aiService: AIService
  ) {}

  protected async handleCommand(command: string): Promise<void> {
    // Parse command with AI service
    const parsedCommand = await this.aiService.parseWithAI(command);

    if (!parsedCommand) {
      console.warn('Could not parse command:', command);
      return;
    }

    // Execute command based on type
    switch (parsedCommand.type) {
      case 'solar-system':
        this.sceneService.createSolarSystem();
        break;
      case 'galaxy':
        this.sceneService.createGalaxy();
        break;
      case 'black-hole':
        this.sceneService.createBlackHole();
        break;
      default:
        console.warn('Unknown command type:', parsedCommand.type);
    }
  }
}
