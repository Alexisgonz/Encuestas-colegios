import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaFormComponent } from './components/encuesta-form/encuesta-form.component';
import { CardHeadListComponent } from 'src/app/shared/components/card-head-list/card-head-list.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { colegiosTableCaptionComponent } from 'src/app/shared/components/table-caption/table-caption.component';
import { EncuestasListComponent } from './components/encuestas-list/encuestas-list.component';

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
    declarations: [EncuestaFormComponent, EncuestasListComponent, ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CardHeadListComponent,
        ButtonModule,
        TableModule,
        ReactiveFormsModule,
        colegiosTableCaptionComponent,
    ],
})
export class EncuestasFormModule {}
