import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { scoreData } from './scoredats';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class MoviegameService {

  private scoredatasUrl = 'api/scoredatas';
  private datasUrl = 'api/datas';

  constructor( private http: HttpClient ) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      return of(result as T);
    };
  }
  getDatas (): Observable<Data[]> {

    return this.http.get<Data[]>(this.datasUrl)
      .pipe(
        catchError(this.handleError('getDatas', []))
      );
  }


  getScoreDatas (): Observable<scoreData[]> {

    return this.http.get<scoreData[]>(this.scoredatasUrl)
      .pipe(
        catchError(this.handleError('getScoreDatas', []))
      );
  }

}
