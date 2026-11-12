import { Service, signal } from '@angular/core';

@Service()
export class Task {
  tasks = signal<string[]>(['Study Angular', 'Review TypeScript']);

  addTask(description: string): void {
    if (description.trim()) {
      // Add the new task while maintaining immutability (Spread operator)
      this.tasks.update((list) => [...list, description]);
    }
  }

  removeTask(indexToRemove: number): void {
    this.tasks.update((list) => list.filter((_, index) => index !== indexToRemove));
  }
}
