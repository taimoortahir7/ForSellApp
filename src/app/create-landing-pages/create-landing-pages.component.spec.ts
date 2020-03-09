import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLandingPagesComponent } from './create-landing-pages.component';

describe('CreateLandingPagesComponent', () => {
  let component: CreateLandingPagesComponent;
  let fixture: ComponentFixture<CreateLandingPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLandingPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLandingPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
