import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {TodoService} from './todo.service';
import {TodoDataService} from './todo-data.service';
import {TodoAppComponent} from './todo/todo-app.component';
import {ActiveTaskPipe} from './todo/todo-app.pipe';

@NgModule({
  declarations: [
    AppComponent,      
    TodoAppComponent,
    ActiveTaskPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [TodoService,TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
