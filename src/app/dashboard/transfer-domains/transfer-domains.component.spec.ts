import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferDomainsComponent } from './transfer-domains.component';

describe('TransferDomainsComponent', () => {
  let component: TransferDomainsComponent;
  let fixture: ComponentFixture<TransferDomainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferDomainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
