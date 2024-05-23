import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
    selector: 'colegios-table-caption',
    standalone: true,
    imports: [CommonModule, InputTextModule, RadioButtonModule],
    template: `<div
        class="flex flex-wrap gap-2 align-items-center justify-between"
    >
        <span
            class="p-input-icon-left p-inputtext-sm w-full sm:max-w-sm order-1 sm:-order-1"
        >
            <input
                pInputText
                type="text"
                (input)="onChangeInput($event)"
                placeholder="Buscar..."
                class="w-full"
            />
        </span>

        <button
            *ngIf="btnExport"
            type="button"
            pButton
            pRipple
            icon="pi pi-file"
            (click)="onClick($event)"
            class="p-button-success mr-2"
            pTooltip="Exportar CSV"
            tooltipPosition="top"
        ></button>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class colegiosTableCaptionComponent {
    @Input() btnExport = true;
    @Output() btnClick = new EventEmitter<Event>();
    @Output() inputChange = new EventEmitter<boolean>();

    onClick(event: Event) {
        this.btnClick.emit(event);
    }

    onChangeInput(event: any) {
        this.inputChange.emit(event);
    }
}
