import {Component} from '@angular/core';
import {TodoDataService} from '../todo-data.service';
import {Todos} from '../todos';
@Component({
    moduleId: module.id,
    selector: 'todo-app',
    templateUrl: 'todo-app.component.html',
    styleUrls: ['todo-app.component.css']
})
export class TodoAppComponent {
    newTodo: Todos = new Todos();
    allTodos: Todos[];
    isNewTodo: boolean = this.newTodo.taskName != undefined ? true : false;
    activeTask: number = 0;
    constructor(private todoDataService: TodoDataService) {
    }
    ngOnInit() {
        this.getAllTodos();
    }
    
    addTodo() {
        if (this.newTodo.taskName) {
            this.newTodo.taskDescription = this.newTodo.taskName;
            this.newTodo.taskStatus = "Active";
            this.todoDataService.addTask(this.newTodo).subscribe(allTodos => this.allTodos = allTodos);
            this.newTodo = new Todos();
            this.isNewTodo = false;
        } else {
            this.isNewTodo = true;
        }
    }

    toggleTodoComplete(todo) {
        let status;
        if (todo.taskStatus == 'Complete') {
            status = 'Active';
        } else {
            status = 'Complete';
        }
        console.log(status);
        this.todoDataService.toggleTodoComplete(todo.taskId, status).subscribe(allTodos => this.allTodos = allTodos);
        
    }

    removeTodo(todo) {
        this.todoDataService.archiveTodoById(todo.taskId).subscribe(allTodos => this.allTodos = allTodos);
    }


    getAllTodos(): void {
        this.todoDataService.getDbTodos().subscribe(allTodos => this.allTodos = allTodos);
//         console.log(this.allTodos);
//        let filterActive = this.allTodos.filter(todo => todo.taskStatus == 'Active');
//        console.log(filterActive);
//        this.activeTask = filterActive.length;
//        console.log(this.activeTask);
       
    }

}
