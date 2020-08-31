import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArgumentArrowComponent } from './components/argument/argument-arrow/argument-arrow.component';
import { ArgumentComponent } from './components/argument/argument/argument.component';
import { ArgumentsListComponent } from './components/argument/arguments-list/arguments-list.component';
import { HideableComponent } from './components/hideable/hideable.component';
import { NavigationButtonComponent } from './components/navigation-button/navigation-button.component';
import { ConnectedPropositionComponent } from './components/proposition/connected-proposition/connected-proposition.component';
import { PropositionWithArgumentsComponent } from './components/proposition/proposition-with-arguments/proposition-with-arguments.component';
import { PropositionComponent } from './components/proposition/proposition/proposition.component';
import { SinglePropositionComponent } from './components/proposition/single-proposition/single-proposition.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ConnectorComponent } from './components/connector/connector.component';


@NgModule({
  declarations: [
    AppComponent,
    SinglePropositionComponent,
    ArgumentArrowComponent,
    ConnectedPropositionComponent,
    PropositionComponent,
    PropositionWithArgumentsComponent,
    ArgumentComponent,
    ArgumentsListComponent,
    HideableComponent,
    NavigationButtonComponent,
    LayoutComponent,
    ConnectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
