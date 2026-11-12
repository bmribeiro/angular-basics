import { Component, input, output } from '@angular/core';
import { UrgentPipe } from '../pipes/urgente-pipe';
import { Highlight } from '../directives/highligh';

@Component({
  imports: [UrgentPipe, Highlight],
  selector: 'app-task-item',
  styleUrl: './task-item.css',
  templateUrl: './task-item.html',
})
export class TaskItem {
  // 1. Required Signal Input: ensures at compile time that the parent component provides the task text
  task = input.required<string>();

  // 2. Modern Output: creates a typed event emitter without relying on EventEmitter/RxJS
  remove = output<void>();

  clickToRemove(): void {
    // Notifies the parent component that this item has requested to be removed
    this.remove.emit();
  }
}
