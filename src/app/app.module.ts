import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TokenInterceptorProvider } from './_helpers/token.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
//import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  providers: [TokenInterceptorProvider, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
