import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';

//Cambiar el locale de la app.
import localeEs from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
import { ConfirmDialogComponent } from './shared/services/confirm-dialog/confirm-dialog.component';
registerLocaleData( localeEs );


@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
