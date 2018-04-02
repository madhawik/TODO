import { Injectable } from '@angular/core';
import { TODOS } from './mock-todos';
import { Todos } from './todos';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoDataService {
    private taskUrl = '/service/tasks';
    private addTaskUrl = '/service/addTask/';
    private archiveTaskUrl = '/service/archiveTask/';
    private updateTask = '/service/';
    private changeTaskStatusUrl = '/service/changeTaskStatus/';
    private getTaskByIdUrl = '/service/';
    constructor(private http: HttpClient) { }

    getTodos(): Observable<Todos[]> {
        return of(TODOS);
    }

    getDbTodos(): Observable<Todos[]> {
        return this.http.get<Todos[]>(this.taskUrl)
    }

    addTask(todo: Todos): Observable<Todos[]> {
        let newAddTaskUrl = this.addTaskUrl + todo.taskName + "/" + todo.taskDescription + "/" + todo.taskPriority + "/" + todo.taskStatus
        return this.http.post<Todos[]>(newAddTaskUrl, "");
    }

    archiveTodoById(taskId: string): Observable<Todos[]> {
        console.log(taskId);
        let newArchiveTaskUrl = this.archiveTaskUrl + taskId;
        return this.http.post<Todos[]>(newArchiveTaskUrl, "");
    }

    toggleTodoComplete(taskId: string, status: string): Observable<Todos[]> {
        let newChangeTaskStatusUrl = this.changeTaskStatusUrl + taskId + "/" + status;
        return this.http.post<Todos[]>(newChangeTaskStatusUrl, "");
    }
}