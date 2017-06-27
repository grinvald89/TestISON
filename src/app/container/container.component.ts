import { Component } from '@angular/core';

import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';
import { PopupComponent } from './popup/popup.component';

import { DataService } from './data.service';
import { ModelOperationsService } from './model-operations.service';

import { IDomNode } from '../shared/i-dom-node.interface';

class ErrorRequest {
	constructor (
		public status: boolean = false,
		public error: Object = { }
	) { }
}

@Component({
	selector: 'app-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.css']
})

export class ContainerComponent {
	iDomNode: IDomNode;
	result: string;
	url: string;

	errorRequest = new ErrorRequest(false);

	constructor (
		private dataService: DataService,
		private modelOperationsService: ModelOperationsService
	) { }

	onGetModel(url: string) {
		this.url = url;
		this.result = '';
		this.errorRequest.status = false;

		this.dataService.getIDOMModel(url)
			.subscribe(
				res => this.result = this.modelOperationsService.toHTML(res),
				err => {
					this.errorRequest.status = true;
					this.errorRequest.error = err;
				}
			);
	}

	onClosePopup() {
		this.errorRequest.status = false;
		this.errorRequest.error = { };
	}
}