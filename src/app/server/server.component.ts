import { Component } from "@angular/core";
import { template } from "@angular/core/src/render3";

//special decorator that must be imported 
@Component({
    selector:'.app-server',
    templateUrl:'./server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{

  serverId: number = 10 ;
  serverStatus: string = 'offline' ;

  constructor(){
      this.serverStatus = Math.random() < 0.5 ? 'Online' : 'offline'
  }

  getServerStatus(){
      return this.serverStatus;
  }

  getColor(){

    return this.serverStatus == 'Online' ? 'green' : 'red';
  }
}