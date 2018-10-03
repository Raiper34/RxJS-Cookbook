import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDelayComponent } from './input-delay.component';

describe('InputDelayComponent', () => {
  let component: InputDelayComponent;
  let fixture: ComponentFixture<InputDelayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDelayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
