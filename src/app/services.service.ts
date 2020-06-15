import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  public buttonClick = new Subject()
  public showSubSidebar = new Subject()
  updateToolTitle = new EventEmitter();
  visible: boolean;
  constructor() { this.visible = true; }
  

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }
}
