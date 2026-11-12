import { Component, inject } from '@angular/core';
import { ApiTask } from '../services/api-task';
import { TaskItem } from '../task-item/task-item';

@Component({
  imports: [TaskItem],
  selector: 'app-api-task-list',
  styleUrl: './api-task-list.css',
  templateUrl: './api-task-list.html',
})
export class ApiTaskList {
  private apiTaskService = inject(ApiTask);

  sugestions = this.apiTaskService.apiSuggestions;
  tasks = this.apiTaskService.importedTasks;

  addTask(title: string): void {
    this.apiTaskService.addTask(title);
  }

  removeTask(indexToRemove: number): void {
    this.apiTaskService.removeTask(indexToRemove);
  }
}
