import { Component } from '@angular/core';
import { Tariff } from '../app/models/tariffs.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  calculatedCosts: Array<Tariff> = [];

  constructor() {}

  getCalculatedCosts(costs: any) {
    this.calculatedCosts = costs
  }
}
