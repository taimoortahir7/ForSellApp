import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public activeNav: boolean = false
  constructor(
    private data: ServicesService, 
    private router: Router,
    private storage: StorageService
  ) { }

  ngOnInit() {
  }

  onClickMenu() {
    this.activeNav = !this.activeNav;
    this.data.buttonClick.next(this.activeNav)
    // this.data.onClickBurgerMenu.emit('');
  }

  logout() {
    this.storage.removeToken();
    this.router.navigate(['/account/login'])
  }
}
