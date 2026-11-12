import { Component, inject, signal } from '@angular/core';
import { Task } from '../services/task';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  standalone: true,
  selector: 'app-task-list',
  styleUrl: './task-list.css',
  templateUrl: './task-list.html',
})
export class TaskList {
  private taskService = inject(Task);

  tasks = this.taskService.tasks;

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
    this.taskService.addTask(description);
  }

  removeTask(index: number): void {
    this.taskService.removeTask(index);
  }
}
