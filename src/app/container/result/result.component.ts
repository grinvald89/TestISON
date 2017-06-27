import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
	selector: 'app-result',
	templateUrl: './result.component.html'
})

export class ResultComponent {
	@Input() result: string;

	showResult: boolean = false;
	resultHtml: SafeHtml;

	constructor (private sanitizer: DomSanitizer) {	}

	ngOnChanges(changes) {
		this.showResult = false;

		if (changes.result.currentValue) {
			this.resultHtml = this.sanitizer.bypassSecurityTrustHtml(changes.result.currentValue);

			this.showResult = true;
		}
	}
}
