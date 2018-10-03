import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CurrentPreviousFormValueComponent } from './components/current-previous-form-value/current-previous-form-value.component';
import { RetryOnFailureComponent } from './components/retry-on-failure/retry-on-failure.component';
import {HttpClientModule} from '@angular/common/http';
import { PoolingComponent } from './components/pooling/pooling.component';
import { InputDelayComponent } from './components/input-delay/input-delay.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentPreviousFormValueComponent,
    RetryOnFailureComponent,
    PoolingComponent,
    InputDelayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
