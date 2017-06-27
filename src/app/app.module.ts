import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './container/result/result.component';
import { PopupComponent } from './container/popup/popup.component';

import { DataService } from './container/data.service';
import { ModelOperationsService } from './container/model-operations.service';

@NgModule({
	declarations: [
		AppComponent,
		ContainerComponent,
		FormComponent,
		ResultComponent,
		PopupComponent
	],

	imports: [
		BrowserModule,
		HttpModule,
		FormsModule
	],

	providers: [
		DataService,
		ModelOperationsService
	],

	bootstrap: [
		AppComponent
	]
})

export class AppModule { }
