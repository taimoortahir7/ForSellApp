import { Component, OnInit } from '@angular/core';
import { ServicesService } from './../../services.service';

@Component({
  selector: 'app-builder-sidebar-panel',
  templateUrl: './builder-sidebar-panel.component.html',
  styleUrls: ['./builder-sidebar-panel.component.scss']
})
export class BuilderSidebarPanelComponent implements OnInit {
  open_sidebar = false;
  constructor( public sidebarPanel: ServicesService) { }

  ngOnInit() {
  }

  show_sidebar() {
    this.open_sidebar = !this.open_sidebar ;
  }

}
