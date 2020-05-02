import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonMaterialModule } from './common-material-module';
import { CommonHttpServiceService } from './shared/service/common-http-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    CommonMaterialModule,
    HttpClientModule,
  ],
  providers: [CommonHttpServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
