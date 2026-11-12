import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urgent',
})
export class UrgentPipe implements PipeTransform {
  transform(task: string): string {
    if (!task) return '';

    // Verifica se a string contém indicação de prioridade Alta
    if (task.toLowerCase().includes('high')) {
      return `🔥 [URGENT] ${task}`;
    }

    return task;
  }
}
