import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {TodoFormComponent} from './todo-form/todo-form.component'
import { HomePageRoutingModule } from './home-routing.module';
import {ReactiveFormsModule} from '@angular/forms'
import { UpdateTodoComponent } from './update-todo/update-todo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, TodoFormComponent,UpdateTodoComponent],
  entryComponents: [TodoFormComponent, UpdateTodoComponent]
})
export class HomePageModule {}
