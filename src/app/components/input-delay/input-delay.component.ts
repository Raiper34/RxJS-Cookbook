import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-input-delay',
  templateUrl: './input-delay.component.html',
  styleUrls: ['./input-delay.component.css']
})
export class InputDelayComponent implements OnInit {

  testForm: FormGroup;
  $testFormValue: Observable<any>;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.testForm = this.fb.group({
      testInput: 0,
    });
    const delay = 1000;
    this.$testFormValue = this.testForm.valueChanges.pipe(
      debounceTime(delay)
    );
  }

}
