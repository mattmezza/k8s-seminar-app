import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import { AppService } from './app.service';

const noop = () => {};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ AppService ],
})
export class AppComponent {
  title = 'K8S seminar UI';
  msg = '';
  sayHelloForm = this.formBuilder.group({ name: '' });
  loading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private svc: AppService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    this.loading$.next(true);
    this.svc.hello(this.sayHelloForm.value.name ?? undefined)
      .subscribe(
        msg => this.msg = msg,
        noop,
        () => this.loading$.next(false),
      );
    this.sayHelloForm.reset();
  }
}
