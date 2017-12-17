import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Technology } from './technology';
import { TECHNOLOGIES } from './mock-technologies';

import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class TechnologyService {
  private technologiesURL = 'api/technologies';

  private log(message: string) {
    this.messageService.add('TechnologyService: ' + message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  searchTechnologies(term: string): Observable<Technology[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Technology[]>(`${this.technologiesURL}/?name=${term}`).pipe(
      tap(() => this.log(`found technologies matching "${term}"`)),
      catchError(this.handleError<Technology[]>('searchTechnologies', []))
    );

  }

  addTechnology(technology: Technology): Observable<Technology> {
          return this.http.post<Technology>(this.technologiesURL, technology, httpOptions)
          .pipe(
            tap((newTechnology: Technology) =>
            this.log(`added technology w/ id=${newTechnology.id}`)),
            catchError(this.handleError<Technology>('addTechnology'))
          );
  }

  getTechnologies(): Observable<Technology[]> {
    return this.http.get<Technology[]>(this.technologiesURL)
                    .pipe(
                      tap(technologies => this.log(`fetched technologies`)),
                      catchError(this.handleError('getTechnologies', []))
                    );
  }

  getTechnology(id: number): Observable<Technology> {
    const url = `${this.technologiesURL}/${id}`;
    return this.http.get<Technology>(url).pipe(
      tap(() => this.log(`fetched technology id=${id}`)),
      catchError(this.handleError<Technology>(`getTechnology id=${id}`))
    );
  }

  updateTechonology(technology: Technology): Observable<any> {
    return this.http.put(this.technologiesURL, technology, httpOptions).pipe(
      tap(() => this.log(`updated technology id=${technology.id}`)),
      catchError(this.handleError<any>('updateTechnology'))
    );
  }

  deleteTechnology(technology: Technology | number): Observable<Technology> {
    const id = typeof technology === 'number' ? technology : technology.id;
    const url = `${this.technologiesURL}/${id}`;
    return this.http.delete<Technology>(url, httpOptions).pipe(
      tap(() => this.log(`deleted technology id=${id}`)),
      catchError(this.handleError<Technology>('deleteTechnology'))
    );
  }

}
