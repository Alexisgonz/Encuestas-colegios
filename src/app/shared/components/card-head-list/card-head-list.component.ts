import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';

export type ColorPreviewSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
    selector: 'app-card-head-list',
    standalone: true,
    imports: [CommonModule, ButtonModule],
    template: `<div
        class="flex flex-wrap gap-2 align-items-center justify-between border-b"
    >
        <div class="flex justify-start items-center">
            <div class="mr-3">
                <i class="{{ icon }} text-orange-400 text-3xl"></i>
            </div>
            <h2>{{ title }}</h2>
        </div>
        <div class="mb-3" *ngIf="btnAction">
            <button
                pButton
                pRipple
                type="button"
                icon="pi pi-plus"
                class="bg-blue-400"
                (click)="onClick($event)"
            ></button>
        </div>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardHeadListComponent {
    @Input() title = '';
    @Input() btnAction = true;
    @Input() icon = '';
    @Output() btnClick = new EventEmitter<Event>();

    onClick(event: Event) {
        this.btnClick.emit(event);
    }
}
