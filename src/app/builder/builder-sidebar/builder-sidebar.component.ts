import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-builder-sidebar',
  templateUrl: './builder-sidebar.component.html',
  styleUrls: ['./builder-sidebar.component.scss']
})
export class BuilderSidebarComponent implements OnInit {

  constructor(    
    private router: Router,
    private storage: StorageService,
    private dataservice: ServicesService
  ) { }

  ngOnInit() {
  }
  openSub() {
    this.dataservice.showSubSidebar.next(true);
  }
  closeSub() {
    this.dataservice.showSubSidebar.next(false);
  }
  
  logout() {
    this.storage.removeToken();
    this.router.navigate(['/account/login'])
  }

}
