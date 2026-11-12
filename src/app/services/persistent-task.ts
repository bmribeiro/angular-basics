import { computed, effect, Service, signal } from '@angular/core';

@Service()
export class PersistentTask {
  private readonly STORAGE_KEY = 'angular_basics_tasks';

  // 1. Initial hydration from localStorage
  tasks = signal<string[]>(this.loadSavedTasks());

  // 2. Derived state (Read-only)
  totalTasks = computed(() => this.tasks().length);

  constructor() {
    // 3. Side effect: automatically saves whenever 'tasks' changes
    effect(() => {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.tasks()));
    });
  }

  addTask(description: string): void {
    if (description.trim()) {
      this.tasks.update((list) => [...list, description]);
    }
  }

  clearAll(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this.tasks.set([]);
  }

  removeTask(indexToRemove: number): void {
    this.tasks.update((list) => list.filter((_, index) => index !== indexToRemove));
  }

  private loadSavedTasks(): string[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (!data) return ['Study computed()', 'Test effect() with localStorage'];

    try {
      return JSON.parse(data);
    } catch {
      return [];
    }
  }
}
