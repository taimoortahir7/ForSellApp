import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit {
  public openState: boolean = false;
  constructor(
    private dataService: ServicesService,
    private route: Router,
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.dataService.buttonClick.subscribe (
      (data: boolean) => {
        this.openState = data;
        console.log(data)
      } 
    )
    
  }

  logout(){
    this.storage.removeToken();
    this.route.navigate(['/'])
  }

}
