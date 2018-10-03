import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryOnFailureComponent } from './retry-on-failure.component';

describe('RetryOnFailureComponent', () => {
  let component: RetryOnFailureComponent;
  let fixture: ComponentFixture<RetryOnFailureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetryOnFailureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetryOnFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
