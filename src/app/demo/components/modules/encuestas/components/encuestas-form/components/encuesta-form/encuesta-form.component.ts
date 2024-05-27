import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-encuesta-form',
  templateUrl: './encuesta-form.component.html',
})
export class EncuestaFormComponent implements OnInit{
  formEncuesta!: FormGroup<any>

  constructor(private ref: DynamicDialogRef,){}

  ngOnInit(): void {
      
  }

  onCancel() {
    this.ref.close();
  }

  onSubmit() {
    
  }


}
