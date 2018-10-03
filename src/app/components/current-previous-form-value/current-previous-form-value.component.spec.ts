import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPreviousFormValueComponent } from './current-previous-form-value.component';

describe('CurrentPreviousFormValueComponent', () => {
  let component: CurrentPreviousFormValueComponent;
  let fixture: ComponentFixture<CurrentPreviousFormValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPreviousFormValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPreviousFormValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
