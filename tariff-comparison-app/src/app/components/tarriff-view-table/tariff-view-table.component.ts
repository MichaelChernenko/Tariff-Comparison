import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Tariff } from '../../models/tariffs.model';

@Component({
  selector: 'app-tariff-view-table',
  templateUrl: './tariff-view-table.component.html',
  styleUrls: ['./tariff-view-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TarriffViewTableComponent implements OnChanges {
  @Input() annualCostData: Array<Tariff> = [];

  ngOnChanges() {
    this.findBestPrice();
  }

  findBestPrice(): void {
    const bestPrice = this.annualCostData.reduce((previous, current) => {
      return current.annualCost < previous.annualCost ? current : previous
    })

    this.annualCostData.forEach(item => {
      if (item.name === bestPrice.name) {
        item.isBestPrice = true;
      }
    })

    console.log(this.annualCostData)
  }
}
