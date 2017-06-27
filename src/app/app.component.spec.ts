import { TestBed, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { FormComponent } from './container/form/form.component';
import { ResultComponent } from './container/result/result.component';
import { PopupComponent } from './container/popup/popup.component';

import { DataService } from './container/data.service';
import { ModelOperationsService } from './container/model-operations.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('ISONE test app');
  }));
});