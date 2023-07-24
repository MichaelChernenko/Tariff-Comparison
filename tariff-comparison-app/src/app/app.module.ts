import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TarriffViewTableComponent } from './components/tarriff-view-table/tariff-view-table.component';
import { ConsumptionFormComponent } from './components/consumption-form/consumption-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TarriffViewTableComponent,
    ConsumptionFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
