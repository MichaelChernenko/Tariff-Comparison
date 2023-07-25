import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Tariff } from '../../models/tariffs.model';

@Component({
  selector: 'app-consumption-form',
  templateUrl: './consumption-form.component.html',
  styleUrls: ['./consumption-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumptionFormComponent implements OnDestroy {
  @Output() getCalculatedCosts = new EventEmitter<Array<Tariff>>();

  tariffForm: FormGroup;
  subscription$!: Subscription;

  constructor(private httpService: HttpService) {
    this.tariffForm = new FormGroup({
      userConsumption: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]),
    });
  }

  ngOnDestroy(): void {
      this.subscription$.unsubscribe();
  }

  submit(): void {
    const consumption = this.tariffForm.get('userConsumption')?.value;
    this.subscription$ = this.httpService.getConsumption(consumption)
      .subscribe({
        next:(data: any) => {
          this.getCalculatedCosts.emit(data.consumption);
        },
        error: error => console.log(error)
      })
  }
}
