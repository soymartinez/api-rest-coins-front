import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcoinComponent } from './listcoin.component';

describe('ListcoinComponent', () => {
  let component: ListcoinComponent;
  let fixture: ComponentFixture<ListcoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
