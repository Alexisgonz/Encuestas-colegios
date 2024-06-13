import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { Encuestas } from 'src/app/shared/interfaces/encuestas.interface';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class EncuestasService {
    apiUrl = environment.baseUrl;
    encuestasUrl = `${this.apiUrl}/encuestas`;

    constructor(private http: HttpClient) {}

    getEncuestas(): Observable<Encuestas[]> {
        return this.http.get<Encuestas[]>(this.encuestasUrl);
    }
}
