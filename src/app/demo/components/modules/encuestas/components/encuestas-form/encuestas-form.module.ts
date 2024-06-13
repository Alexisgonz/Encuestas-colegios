import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaFormComponent } from './components/encuesta-form/encuesta-form.component';
import { CardHeadListComponent } from 'src/app/shared/components/card-head-list/card-head-list.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncuestasListComponent } from './components/encuestas-list/encuestas-list.component';
import { RoundButtonMenuComponent } from 'src/app/shared/components/round-button-menu/round-button-menu.component';
import { ColegiosTableCaptionComponent } from 'src/app/shared/components/table-caption/table-caption.component';
import { MenuModule } from 'primeng/menu';
import { FormButtonsSubmitComponent } from 'src/app/shared/components/form-buttons-submit/form-buttons-submit.component';
import { DialogService } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

const routes: Routes = [
    {
        path: '',
        component:EncuestasListComponent,
        title: 'Encuestas List',
    },
    {
        path: 'add',
        component: EncuestaFormComponent,
        title: 'Registro Encuestas',
    },
];

@NgModule({
    declarations: [EncuestaFormComponent, EncuestasListComponent ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CardHeadListComponent,
        ButtonModule,
        TableModule,
        ReactiveFormsModule,
        ColegiosTableCaptionComponent,
        RoundButtonMenuComponent,
        MenuModule,
        FormButtonsSubmitComponent,
        InputTextModule,
        FormsModule,
        CalendarModule
    ],
    providers: [DialogService],
})
export class EncuestasFormModule {}
