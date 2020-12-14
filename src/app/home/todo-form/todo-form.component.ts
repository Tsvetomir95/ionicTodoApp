import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  title: string;
  description: string;
  todoForm: FormGroup;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.todoForm = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }
 
  createTodo() {
    if (this.todoForm.valid === false) {
      return
    }
   
    console.log(this.todoForm);
    this.modalCtrl.dismiss(
      {
        id: this.todoForm.value.id,
        title: this.todoForm.value.title,
        description: this.todoForm.value.description,
        isCompleted: false
    },'passing data');
  }

  closeModal() {
    this.modalCtrl.dismiss(null,'cancel');
  }
}
