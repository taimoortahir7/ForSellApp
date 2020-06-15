import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServicesService } from './../services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-builder-dashboard',
  templateUrl: './builder-dashboard.component.html',
  styleUrls: ['./builder-dashboard.component.scss']
})
export class BuilderDashboardComponent implements OnInit {
  public isSettingPage: boolean;
  public showSidebar: Subscription
  constructor(public dataService  : ServicesService) { }

  ngOnInit() {
    this.isSettingPage = true;
    this.showSidebar = this.dataService.showSubSidebar.subscribe (
      (data: boolean) => {
        this.isSettingPage = data;
        // console.log(data)
      } 
    )
  }
  OnDestroy() {
    this.showSidebar.unsubscribe()
  }
}
