import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Tariff } from '../../models/tariffs.model';

@Component({
  selector: 'app-tariff-view-table',
  templateUrl: './tariff-view-table.component.html',
  styleUrls: ['./tariff-view-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TarriffViewTableComponent {
  @Input() annualCostData: Array<Tariff> = [];

  constructor() { }
}
