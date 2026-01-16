import {
  Component,
  output,
  signal,
  ChangeDetectionStrategy,
  model,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AIService } from '../services/ai.service';
import { AudioService } from '../services/audio.service';

/**
 * CommandInputComponent handles natural language input from users
 * Workshop TODO: Add voice input, command history, autocomplete
 */
@Component({
  selector: 'app-command-input',
  imports: [FormsModule],
  template: `
    <div class="command-container">
      <div class="command-header">
        <h2 class="command-title">Galaxy Builder</h2>
        <button
          class="mute-button"
          (click)="toggleMute()"
          [class.muted]="audioService.isMuted()"
          type="button"
        >
          {{ audioService.isMuted() ? '🔇' : '🔊' }}
        </button>
      </div>

      <form class="command-form" (ngSubmit)="handleSubmit()">
        <div class="input-group">
          <input
            class="command-input"
            [(ngModel)]="inputText"
            name="command"
            type="text"
            placeholder="Type a command... (e.g., 'Create a solar system')"
            [disabled]="aiService.isProcessing()"
          />
          <button
            class="submit-button"
            type="submit"
            [disabled]="!inputText() || aiService.isProcessing()"
          >
            @if (aiService.isProcessing()) {
              <span class="spinner">⟳</span>
            } @else {
              Generate
            }
          </button>
        </div>
      </form>

      <div class="suggestions">
        <span class="suggestion-label">Try:</span>
        @for (suggestion of suggestions; track suggestion) {
          <button
            class="suggestion-chip"
            (click)="applySuggestion(suggestion)"
            [disabled]="aiService.isProcessing()"
            type="button"
          >
            {{ suggestion }}
          </button>
        }
      </div>

      @if (aiService.lastCommand()) {
        <div class="last-command">
          Last: <strong>{{ aiService.lastCommand() }}</strong>
        </div>
      }
    </div>
  `,
  styles: `
    .command-container {
      padding: 1.5rem;
      background: linear-gradient(135deg, rgba(26, 26, 46, 0.95), rgba(15, 15, 30, 0.95));
      border-radius: 1rem;
      border: 1px solid rgba(0, 255, 136, 0.2);
      backdrop-filter: blur(10px);
    }

    .command-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .command-title {
      font-size: 1.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, #00ff88, #00ccff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin: 0;
    }

    .mute-button {
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(0, 255, 136, 0.3);
      border-radius: 0.5rem;
      padding: 0.5rem;
      cursor: pointer;
      font-size: 1.25rem;
      transition: all 0.2s;
    }

    .mute-button:hover {
      background: rgba(0, 255, 136, 0.1);
      transform: scale(1.05);
    }

    .mute-button.muted {
      opacity: 0.5;
    }

    .command-form {
      margin-bottom: 1rem;
    }

    .input-group {
      display: flex;
      gap: 0.5rem;
    }

    .command-input {
      flex: 1;
      padding: 0.875rem 1rem;
      background: rgba(0, 0, 0, 0.4);
      border: 2px solid rgba(0, 255, 136, 0.3);
      border-radius: 0.75rem;
      color: #ffffff;
      font-size: 1rem;
      font-family: inherit;
      transition: all 0.2s;
    }

    .command-input:focus {
      outline: none;
      border-color: #00ff88;
      box-shadow: 0 0 0 3px rgba(0, 255, 136, 0.1);
    }

    .command-input::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    .command-input:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .submit-button {
      padding: 0.875rem 2rem;
      background: linear-gradient(135deg, #00ff88, #00ccff);
      border: none;
      border-radius: 0.75rem;
      color: #0f0f1e;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      white-space: nowrap;
    }

    .submit-button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 255, 136, 0.4);
    }

    .submit-button:active:not(:disabled) {
      transform: translateY(0);
    }

    .submit-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .spinner {
      display: inline-block;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .suggestions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
      margin-bottom: 1rem;
    }

    .suggestion-label {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.875rem;
      font-weight: 500;
    }

    .suggestion-chip {
      padding: 0.375rem 0.875rem;
      background: rgba(0, 255, 136, 0.1);
      border: 1px solid rgba(0, 255, 136, 0.3);
      border-radius: 2rem;
      color: #00ff88;
      font-size: 0.875rem;
      cursor: pointer;
      transition: all 0.2s;
    }

    .suggestion-chip:hover:not(:disabled) {
      background: rgba(0, 255, 136, 0.2);
      transform: translateY(-1px);
    }

    .suggestion-chip:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .last-command {
      padding: 0.75rem;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 0.5rem;
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.875rem;
      border-left: 3px solid #00ff88;
    }

    .last-command strong {
      color: #00ff88;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandInputComponent {
  readonly inputText = model('');
  readonly commandSubmitted = output<string>();

  protected readonly suggestions = [
    'Create a solar system',
    'Create a galaxy',
    'Create a black hole',
  ];

  constructor(
    protected readonly aiService: AIService,
    protected readonly audioService: AudioService
  ) {}

  protected handleSubmit(): void {
    const text = this.inputText().trim();
    if (!text) return;

    this.audioService.playBeep(880, 100);
    this.commandSubmitted.emit(text);
    this.inputText.set('');
  }

  protected applySuggestion(suggestion: string): void {
    this.inputText.set(suggestion);
    this.handleSubmit();
  }

  protected toggleMute(): void {
    this.audioService.toggleMute();
    if (!this.audioService.isMuted()) {
      this.audioService.playBeep(440, 100);
    }
  }
}
