import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {pairwise, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-current-previous-form-value',
  templateUrl: './current-previous-form-value.component.html',
  styleUrls: ['./current-previous-form-value.component.css']
})
export class CurrentPreviousFormValueComponent implements OnInit {

  testForm: FormGroup;
  $testFormValue: Observable<any>;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.testForm = this.fb.group({
      testInput: 0,
    });
    this.$testFormValue = this.testForm.valueChanges.pipe(
      startWith(this.testForm.value),
      pairwise()
    );
  }

}
