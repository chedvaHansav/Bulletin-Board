import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdsListComponent } from './components/ads-list/ads-list.component';
import { AdFormComponent } from './components/ad-form/ad-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'


import {MatButtonModule } from '@angular/material/button'
import {MatInputModule } from '@angular/material/input'
import {MatCardModule } from '@angular/material/card'
import {MatToolbarModule } from '@angular/material/toolbar'
import {MatIconModule } from '@angular/material/icon'
import {FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdsListComponent,
    AdFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
