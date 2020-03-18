import { Component, OnInit } from '@angular/core';
import { Router }         from '@angular/router';

  // This lets me use jquery
  declare var $: any;

@Component({
  selector: 'app-select-template',
  templateUrl: './select-template.component.html',
  styleUrls: ['./select-template.component.scss']
})
export class SelectTemplateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showModal():void {
    $("#myModal").modal('show');
  }
  sendModal(): void {
    //do something here
    this.hideModal();
  }
  hideModal():void {
    document.getElementById('close-modal').click();
  }

}
