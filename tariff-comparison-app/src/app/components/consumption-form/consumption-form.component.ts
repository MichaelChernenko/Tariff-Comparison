import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-consumption-form',
  templateUrl: './consumption-form.component.html',
  styleUrls: ['./consumption-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumptionFormComponent implements OnDestroy {
  @Output() getCalculatedCosts = new EventEmitter<boolean>();

  tariffForm: FormGroup;
  subscription$!: Subscription;

  constructor(private httpService: HttpService) {
    this.tariffForm = new FormGroup({
      userConsumption: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(3),
      ]),
    });
  }

  ngOnDestroy(): void {
      this.subscription$.unsubscribe();
  }

  submit(): void {
    const consumption = this.tariffForm.get('userConsumption')?.value;
    this.subscription$ = this.httpService.postConsumption(consumption)
      .subscribe({
        next:(data:any) => {
          this.getCalculatedCosts.emit(data.consumption);
        },
        error: error => console.log(error)
      })
  }
}
