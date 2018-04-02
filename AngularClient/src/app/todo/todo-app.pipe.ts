import { Pipe, PipeTransform } from '@angular/core';

import { Todos } from '../todos';

@Pipe({ name: 'activeTasks' })
export class ActiveTaskPipe implements PipeTransform {
    transform(allTodos: Todos[]) {
        return allTodos.filter(todo => todo.taskStatus == 'Active');
    }
}