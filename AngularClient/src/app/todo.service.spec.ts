/* tslint:disable:no-unused-variable */

import {
    beforeEach, beforeEachProviders,
    describe, xdescribe,
    expect, it, xit,
    async, inject
} from '@angular/core/testing';

import {Todos} from './todos';
import {TodoDataService} from './todo-data.service';

describe('Todo Service', () => {

    beforeEachProviders(() => [TodoDataService]);

    describe('#getAllTodos()', () => {

        it('should return an empty array by default', inject([TodoDataService], (service: TodoDataService) => {
            expect(service.getDbTodos()).toEqual([]);
        }));

        it('should return all todos', inject([TodoDataService], (service: TodoDataService) => {
            let todo1 = new Todos({ taskName: 'Hello 1', taskStatus: 'Active' });
            let todo2 = new Todos({ taskName: 'Hello 2', taskStatus: 'Active' });
            service.addTask(todo1);
            service.addTask(todo2);
            expect(service.getDbTodos()).toEqual([todo1, todo2]);
        }));

    });

    describe('#archiveTodoById(id)', () => {

        it('should remove todo with the corresponding id', inject([TodoDataService], (service: TodoDataService) => {
            let todo1 = new Todos({ taskId:'5ac1ebce1daf5e5494a314fb' ,taskName: 'Hello 1', taskStatus: "Active" });
            let todo2 = new Todos({ taskId:'5ac1eb491daf5e5494a314fa' ,taskName: 'Hello 2', taskStatus: "Complete" });
            service.addTodo(todo1);
            service.addTodo(todo2);
            expect(service.getDbTodos()).toEqual([todo1, todo2]);
            service.archiveTodoById("5ac1ebce1daf5e5494a314fb");
            expect(service.getDbTodos()).toEqual([todo2]);
            service.archiveTodoById('5ac1eb491daf5e5494a314fa');
            expect(service.getAllTodos()).toEqual([]);
        }));

        it('should not removing anything if todo with corresponding id is not found', inject([TodoDataService], (service: TodoDataService) => {
            let todo1 = new Todos({ taskId:'5ac1ebce1daf5e5494a314fb' ,taskName: 'Hello 1', taskStatus: "Active" });
            let todo2 = new Todos({ taskId:'5ac1eb491daf5e5494a314fa' ,taskName: 'Hello 2', taskStatus: "Complete" });
            service.addTodo(todo1);
            service.addTodo(todo2);
            expect(service.getDbTodos()).toEqual([todo1, todo2]);
            service.archiveTodoById("5ac1ebce1daf5e5494a314fc");
            expect(service.getDbTodos()).toEqual([todo1, todo2]);
        }));

    });


    describe('#toggleTodoComplete(todo)', () => {

        it('should return the updated todo with inverse complete status', inject([TodoDataService], (service: TodoDataService) => {
            let todo = new Todos({ taskId:'5ac1ebce1daf5e5494a314fb' ,taskName: 'Hello 1', taskStatus: "Active" });
            service.addTodo(todo);
            let updatedTodo = service.toggleTodoComplete('5ac1ebce1daf5e5494a314fb','Complete');
            expect(updatedTodo.taskStatus).toEqual('Complete');
            service.toggleTodoComplete('5ac1ebce1daf5e5494a314fb','Active');
            expect(updatedTodo.taskStatus).toEqual('Active');
        }));

    });

});
