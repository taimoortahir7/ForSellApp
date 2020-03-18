import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderSidebarPanelComponent } from './builder-sidebar-panel.component';

describe('BuilderSidebarPanelComponent', () => {
  let component: BuilderSidebarPanelComponent;
  let fixture: ComponentFixture<BuilderSidebarPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuilderSidebarPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderSidebarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
