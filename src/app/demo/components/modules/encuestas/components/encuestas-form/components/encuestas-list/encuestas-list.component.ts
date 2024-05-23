import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { Encuestas } from 'src/app/shared/interfaces/encuestas.interface';
import { EncuestasService } from '../../../../service/encuestas.service';

@Component({
    selector: 'app-encuestas-list',
    templateUrl: './encuestas-list.component.html',
})
export class EncuestasListComponent implements OnInit {
    @ViewChild('dt', { static: true }) dt!: Table;
    encuestas: Encuestas[] = [];

    constructor(
        private router: Router,
        private encuestasService: EncuestasService
    ) {}

    ngOnInit(): void {
        this.encuestasService.getEncuestas().subscribe((data: Encuestas[]) => {
            this.encuestas = data;
        });
    }

    addNewEncuesta() {
        this.router.navigate(['encuestas/list/add']);
    }

    onGlobalFilterChange(event: any): void {
        this.dt.filterGlobal(event.target.value, 'contains');
    }

    configTable(): void {
        this.dt.sortMode = 'multiple';
        this.dt.sortOrder = 1;
        this.dt.sortField = 'id';
        this.dt.columns = [
            { field: 'nombre', header: 'Nombre' },
            { field: 'descripcion', header: 'Descripcion' },
            { field: 'fechaCreado', header: 'Fecah de Creado' },
        ];
        this.dt.responsive = true;
        this.dt.columnResizeMode = 'expand';
        this.dt.globalFilterFields = ['nombre', 'descripcion', 'createdAt'];
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
}
