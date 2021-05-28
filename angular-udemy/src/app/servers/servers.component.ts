import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
//   selector: '[app-servers]', // Using selector as Attribute
//   selector: '.app-servers', // Using selector as Classes
  selector: 'app-servers',
//   template: `
//    <app-server></app-server>
//    <app-server></app-server>
//   `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
   public allowNewServer: boolean = false;
   public serverCreationStatus: string = 'No server was created';
   public serverName: string = 'ProjectLive';
   public serverCreated = false;
 
  constructor() {
     setTimeout(()=> {
        this.allowNewServer = true;
     }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
     this.serverCreated = true;
     this.serverCreationStatus = `Server was created! Ther server name is ${this.serverName}`;
  }

  onUpdateServerNamne(event: Event): void {
     // Explicit Casting (<HTMLInputElement>event.target)  - This is to inform TypeScrip that the type of the HTML element of this event will be an HTML input element.
     this.serverName = (<HTMLInputElement>event.target).value;
  }

}
