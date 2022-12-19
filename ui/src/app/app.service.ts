import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  hello(name?: string): Observable<string> {
    return this.http.get(`${environment.apiUrl}/hello`, {
      responseType: 'text',
      params: name ? {name} : {},
    })
  }
}
