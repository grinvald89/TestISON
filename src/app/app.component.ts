import { Component } from '@angular/core';

import { FormComponent } from './form/form.component';
import { ContainerComponent } from './container/container.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	url: string = '';

	setUrl (url: string) {
		this.url = url;
	}
}