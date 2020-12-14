import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.scss'],
})
export class UpdateTodoComponent implements OnInit {
  title: string;
  description: string;
  updateTodosForm: FormGroup;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.updateTodosForm = new FormGroup({
      title: new FormControl(this.title, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
     
    });
    
  }


  updateTodo(title) {
    this.modalCtrl.dismiss( {
      id: this.updateTodosForm.value.id,
      title: this.updateTodosForm.value.title,
      description: this.updateTodosForm.value.description,
      isCompleted: false 
    }, 'pass data');
    
  }

  closeModal() {
    this.modalCtrl.dismiss(null, 'cancel');
  }


}
