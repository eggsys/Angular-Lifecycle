import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProducts2Component } from './list-products2.component';

describe('ListProducts2Component', () => {
  let component: ListProducts2Component;
  let fixture: ComponentFixture<ListProducts2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProducts2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProducts2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
