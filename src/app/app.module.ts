import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglePropositionComponent } from './single-proposition/single-proposition.component';
import { ArgumentArrowComponent } from './argument-arrow/argument-arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglePropositionComponent,
    ArgumentArrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
