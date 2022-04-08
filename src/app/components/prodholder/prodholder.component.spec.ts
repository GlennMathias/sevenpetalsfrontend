import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdholderComponent } from './prodholder.component';

describe('ProdholderComponent', () => {
  let component: ProdholderComponent;
  let fixture: ComponentFixture<ProdholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
