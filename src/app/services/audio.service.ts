import { Injectable, signal } from '@angular/core';

/**
 * AudioService manages sound effects for the galaxy builder
 * Workshop TODO: Add spatial audio, background music, and sound effects
 */
@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audioContext: AudioContext | null = null;
  readonly isMuted = signal(false);

  constructor() {
    // Initialize Web Audio API
    if (typeof window !== 'undefined' && 'AudioContext' in window) {
      this.audioContext = new AudioContext();
    }
  }

  /**
   * Play a simple beep sound for user feedback
   */
  playBeep(frequency = 440, duration = 200): void {
    if (!this.audioContext || this.isMuted()) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + duration / 1000
    );

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration / 1000);
  }

  /**
   * Workshop TODO: Play space ambient sounds
   */
  playAmbient(): void {
    this.playBeep(220, 1000);
  }

  /**
   * Workshop TODO: Play creation sound effect
   */
  playCreationSound(): void {
    this.playBeep(880, 300);
  }

  /**
   * Toggle mute
   */
  toggleMute(): void {
    this.isMuted.update((muted) => !muted);
  }
}
