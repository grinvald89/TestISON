import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  json: any;

  constructor(private http: Http) { }

  getIDOMModel(): any {//Импортировать интерфейс
  	return this.http
  		.get('http://127.0.0.1:1337/')
  		.map(res => res.json() as any)
  		.map(res => this.json = res);
  		// .catch()

  }
}