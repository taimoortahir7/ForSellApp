import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderSidebarSettingsComponent } from './builder-sidebar-settings.component';

describe('BuilderSidebarSettingsComponent', () => {
  let component: BuilderSidebarSettingsComponent;
  let fixture: ComponentFixture<BuilderSidebarSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuilderSidebarSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderSidebarSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
