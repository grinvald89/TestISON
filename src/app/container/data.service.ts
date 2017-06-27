import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IDomNode } from '../shared/i-dom-node.interface';

@Injectable()
export class DataService {
	inputModel: IDomNode;

	constructor(private http: Http) { }

	getDOMModel(url: string): Observable<IDomNode[]> {
		return this.http.get(url)
			.map(res => res.json() as IDomNode)
			.map(res => this.inputModel = res);
	}
}