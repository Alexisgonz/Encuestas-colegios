import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { Encuestas } from 'src/app/shared/interfaces/encuestas.interface';

@Injectable({
    providedIn: 'root',
})
export class EncuestasService {
    private encuestas: Encuestas[] = [
        {
            id: 1,
            createdAt: new Date(),
            nombre: 'Encuesta de Satisfacción',
            descripcion:
                'Encuesta para medir la satisfacción de los estudiantes',
            isActivo: true,
        },
        {
            id: 2,
            createdAt: new Date(),
            nombre: 'Encuesta de Calidad',
            descripcion: 'Encuesta para evaluar la calidad de la educación',
            isActivo: false,
        },
        // Agrega más encuestas según sea necesario
    ];

    constructor() {}

    getEncuestas(): Observable<Encuestas[]> {
        return of(this.encuestas).pipe(
            delay(1000), // Simula una llamada de red con retraso
            tap((encuestas: Encuestas[]) => {
                console.log('Encuestas cargadas:', encuestas);
            })
        );
    }
}
