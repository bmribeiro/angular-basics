import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';

interface TodoApi {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Service()
export class ApiTask {
  private http = inject(HttpClient);
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=5';

  // 1. RxJS stream directly converted into a read-only Signal (no need for .subscribe())
  apiSuggestions = toSignal(this.loadSuggestions(), { initialValue: [] });

  // 2. Editable local state for tasks the user decides to import
  importedTasks = signal<string[]>([]);

  private loadSuggestions() {
    return this.http.get<TodoApi[]>(this.API_URL).pipe(
      // 1.1. Transform the API response into an array of strings (titles only)
      map((response) => response.map((item) => item.title)),

      // Intercepts network/server errors and returns a safe empty array
      catchError((error) => {
        console.error('Error loading API suggestions:', error);
        return of([]); // Returns an empty array in case of an error
      }),
    );
  }

  addTask(title: string): void {
    if (title.trim()) {
      this.importedTasks.update((list) => [...list, title]);
    }
  }

  removeTask(indexToRemove: number): void {
    this.importedTasks.update((list) => list.filter((_, index) => index !== indexToRemove));
  }
}
