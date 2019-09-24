import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResOneComponent } from './res-one.component';

describe('ResOneComponent', () => {
  let component: ResOneComponent;
  let fixture: ComponentFixture<ResOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
