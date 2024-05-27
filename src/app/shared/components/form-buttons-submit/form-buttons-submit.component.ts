import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-form-buttons-submit',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './form-buttons-submit.component.html',
})
export class FormButtonsSubmitComponent {

  @Input() isCancel = true;
  @Input() submitLabel = 'Guardar';
  @Input() submitIcon = 'pi pi-check';
  @Input() submitClass = '';
  @Input() cancelLabel = 'Cancelar';
  @Input() cancelClass =
    'p-button-raised p-button-secondary mr-1 p-button-outlined ';

  @Output() cancel = new EventEmitter<boolean>();
  @Output() submit = new EventEmitter<boolean>();

  onCancel() {
    this.cancel.emit(true);
  }

  onSubmit() {
    this.submit.emit();
  }

}
