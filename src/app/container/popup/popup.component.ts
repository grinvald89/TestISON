import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent {
	@Input() url: string;
	@Input() showPopup: boolean;
	@Output() closePopup = new EventEmitter();

	onClosePopup() {
		this.closePopup.emit();
	}
}
