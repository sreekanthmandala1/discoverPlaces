// http-config.services.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {

  // API path
  // tslint:disable-next-line: variable-name
  base_path = '';

  constructor(
    private http: HttpClient
  ) { }

  getListItems(params) {
    console.log(this.base_path + params);
    return this.http.get(this.base_path + params);
  }

}
