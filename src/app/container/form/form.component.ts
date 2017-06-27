import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
	@Output() getModel = new EventEmitter();

	url: string = '';
	showWarningUrl: boolean = false;

	onSubmit(event: Event) {
		event.preventDefault();

		if (this.url.length)
			this.getModel.emit(this.url);
	}

	onButtonFocus(focus: boolean) {
		if (focus && !this.url)
			this.showWarningUrl = true;
	}

	onChange(value: string){
			this.showWarningUrl = (!value.length) ? true : false;
	}
}
