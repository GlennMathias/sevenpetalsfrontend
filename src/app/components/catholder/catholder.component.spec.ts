import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatholderComponent } from './catholder.component';

describe('CatholderComponent', () => {
  let component: CatholderComponent;
  let fixture: ComponentFixture<CatholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
