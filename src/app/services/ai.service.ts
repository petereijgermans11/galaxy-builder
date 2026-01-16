import { Injectable, signal } from '@angular/core';

export interface GalaxyCommand {
  type: 'solar-system' | 'galaxy' | 'black-hole' | 'custom';
  parameters?: Record<string, unknown>;
}

/**
 * AIService parses natural language commands and converts them to galaxy commands
 * Workshop TODO: Participants will integrate with real AI APIs (OpenAI, etc.)
 */
@Injectable({
  providedIn: 'root',
})
export class AIService {
  readonly isProcessing = signal(false);
  readonly lastCommand = signal<string>('');

  /**
   * Parse natural language input into a structured command
   * This is a simple pattern matcher - workshop participants will enhance this
   */
  parseCommand(input: string): GalaxyCommand | null {
    const normalizedInput = input.toLowerCase().trim();
    this.lastCommand.set(input);

    // Simple keyword matching - workshop participants will replace with AI
    if (this.matchesKeywords(normalizedInput, ['solar system', 'planets', 'sun'])) {
      return { type: 'solar-system' };
    }

    if (this.matchesKeywords(normalizedInput, ['galaxy', 'stars', 'milky way'])) {
      return { type: 'galaxy' };
    }

    if (this.matchesKeywords(normalizedInput, ['black hole', 'blackhole', 'singularity'])) {
      return { type: 'black-hole' };
    }

    return null;
  }

  /**
   * Workshop TODO: Replace this with actual AI integration
   * Example: Use OpenAI API to parse natural language
   */
  async parseWithAI(input: string): Promise<GalaxyCommand | null> {
    this.isProcessing.set(true);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // For now, use simple parsing
      // Workshop participants will add:
      // - OpenAI API integration
      // - Claude API integration
      // - Custom AI model integration
      const command = this.parseCommand(input);

      return command;
    } finally {
      this.isProcessing.set(false);
    }
  }

  /**
   * Helper to match keywords in input
   */
  private matchesKeywords(input: string, keywords: string[]): boolean {
    return keywords.some((keyword) => input.includes(keyword));
  }

  /**
   * Workshop TODO: Add text-to-speech for responses
   */
  speak(text: string): void {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      speechSynthesis.speak(utterance);
    }
  }
}
