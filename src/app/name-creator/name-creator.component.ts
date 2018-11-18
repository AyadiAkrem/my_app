import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-name-creator',
  templateUrl: './name-creator.component.html'
})
export class NameCreatorComponent implements OnInit {

  
  userName:string = '';

  constructor() { }

  ngOnInit() {
  }

  isVisible(){
    this.userName != '';
  }

}
