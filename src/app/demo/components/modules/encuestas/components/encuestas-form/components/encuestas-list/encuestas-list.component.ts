import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { Encuestas } from 'src/app/shared/interfaces/encuestas.interface';
import { EncuestasService } from '../../../../service/encuestas.service';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EncuestaFormComponent } from '../encuesta-form/encuesta-form.component';

@Component({
    selector: 'app-encuestas-list',
    templateUrl: './encuestas-list.component.html',
})
export class EncuestasListComponent implements OnInit {
    @ViewChild('dt', { static: true }) dt!: Table;
    encuestas: Encuestas[] = [];
    menuOptions: MenuItem[] = [];
    selectedRew!: Encuestas | undefined;
    dialogRef: DynamicDialogRef | undefined;
    @ViewChild('menu', { static: true }) menu!: Menu;

    constructor(
        private router: Router,
        private encuestasService: EncuestasService,
        private dialogService: DialogService
    ) {}

    ngOnInit(): void {
        this.encuestasService.getEncuestas().subscribe((data: Encuestas[]) => {
            this.encuestas = data;
        });
        this.configTable()
    }

    addNewEncuesta() {
        this.dialogRef = this.dialogService.open(EncuestaFormComponent, {
            header: 'REGISTRAR NUEVO ALIADO',
            width: '50%',
            baseZIndex: 10000,
            dismissableMask: true,
        });
    }

    configTable(): void {
        this.dt.sortMode = 'multiple';
        this.dt.sortOrder = 1;
        this.dt.sortField = 'id';
        this.dt.multiSortMeta = [{ field: 'nombre', order: -1 }];
        this.dt.responsive = true;
        this.dt.columnResizeMode = 'expand';
        this.dt.globalFilterFields = [
            'nobre',
            'descripcion',
            'estado',
        ];
        this.dt.reorderableColumns = true;
        this.dt.rowHover = true;
        this.dt.styleClass = 'p-datatable-striped p-datatable-gridlines';
        this.dt.paginator = true;
        this.dt.rows = 10;
        this.dt.showCurrentPageReport = true;
        this.dt.currentPageReportTemplate =
            'Mostrando {first} a {last} de {totalRecords}';
        this.dt.rowsPerPageOptions = [10, 25, 50];
    }

    onGlobalFilterChange(event: any): void {
        this.dt.filterGlobal(event.target.value, 'contains');
    }

    setMenuOptions(encuesta: Encuestas, $event: any) {
        this.selectedRew = encuesta;

        this.menuOptions = [
            {
                label: 'Editar',
                icon: 'uil uil-edit',
            },
        ];

        this.menu.toggle($event);
    }

    onEdit(encuesta: Encuestas) {
        this.router.navigate([]);
    }
}
