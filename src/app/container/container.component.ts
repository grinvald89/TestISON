/*
	This component receives URL from the parent component,
	requests the DOM from the server, and sends it to the
	component that generates the result.
	Also it displays a popup with an error a fail loading.
*/

import { Component, Input } from '@angular/core';

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
	templateUrl: './container.component.html'
})

export class ContainerComponent {
	@Input() Url: string;

	iDomNode: IDomNode;
	result: string;
	url: string;

	errorRequest = new ErrorRequest();

	constructor (
		private dataService: DataService,
		private modelOperationsService: ModelOperationsService
	) { }

	ngOnChanges (changes) {
		let url = changes.Url.currentValue;

		if (url.length) {
			this.url = url;
			this.result = '';
			this.errorRequest.status = false;

			this.dataService.getDOMModel(url)
				.subscribe(
					res => this.result = this.modelOperationsService.toHTML(res),
					err => {
						this.errorRequest.status = true;
						this.errorRequest.error = err;
					}
				);
		}
	}

	onClosePopup () {
		this.errorRequest.status = false;
		this.errorRequest.error = { };
	}
}