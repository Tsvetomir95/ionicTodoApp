import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonList, IonToggle, ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, DoCheck {
  
  
  constructor(
      private modalCtrl: ModalController,
      public data: DataService,
      public alertController: AlertController
      ) {}

  ngOnInit() {
    
  }

  addTask() {
    this.modalCtrl.create({component: TodoFormComponent }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss()
    }).then(resultData => {
      if (resultData.role === "passing data") {
        this.data.todoFormData.push(resultData.data);
      }else {
        return
      }
      
    });
  }
  changeToggle(todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  async onDelete(todo) {
     let indexOfTodo = this.data.todoFormData.indexOf(todo);
     

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm',
      message: 'Message <strong>Are you sure to delete this task?</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.data.todoFormData.splice(indexOfTodo,1); 
          }
        }
      ]
    });
    await alert.present();
  }

  onUpdate(todo){
    this.modalCtrl.create({component: UpdateTodoComponent, componentProps: {
      title: todo.title,
      description: todo.description
    } }).then(modalEl => {  
      modalEl.present();
      return modalEl.onDidDismiss().then(resultData => {
        if (resultData.role === "pass data") {
          let indexOfTodo = this.data.todoFormData.indexOf(todo);
          this.data.todoFormData.splice(indexOfTodo, 1,resultData.data)
        }else {
          return
        }
          
      });
    });
  }
  ngDoCheck() {
    
  }
}
