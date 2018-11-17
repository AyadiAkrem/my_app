import { Component } from "@angular/core";
import { template } from "@angular/core/src/render3";

//special decorator that must be imported 
@Component({
    selector:'.app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{

  serverId: number = 10 ;
  serverStatus: string = 'offline' ;

  getServerStatus(){
      return this.serverStatus;
  }
}