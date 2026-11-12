import { Component, inject } from '@angular/core';
import { PersistentTask } from '../services/persistent-task';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskItem } from '../task-item/task-item';

@Component({
  imports: [ReactiveFormsModule, TaskItem],
  selector: 'app-persistent-task-list',
  styleUrl: './persistent-task-list.css',
  templateUrl: './persistent-task-list.html',
})
export class PersistentTaskList {
  private persistentTaskService = inject(PersistentTask);

  tasks = this.persistentTaskService.tasks;
  totalTasks = this.persistentTaskService.totalTasks;

  // Form Structure
  newTaskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    priority: new FormControl('Low', [Validators.required]),
  });

  // Form Submission
  onSubmit(): void {
    if (this.newTaskForm.valid) {
      const values = this.newTaskForm.value;
      const description = `${values.title} - ${values.priority}`;

      this.addTask(description);
      this.newTaskForm.reset({ priority: 'Low' }); // Reset the form and set the default priority
    }
  }

  // Component methods now act only as "bridges" to the service
  addTask(description: string): void {
    this.persistentTaskService.addTask(description);
  }

  removeTask(index: number): void {
    this.persistentTaskService.removeTask(index);
  }

  clearAll(): void {
    this.persistentTaskService.clearAll();
  }
}
