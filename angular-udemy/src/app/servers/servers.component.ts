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

  constructor() {
     setTimeout(()=> {
        this.allowNewServer = true;
     }, 3000);
   }

  ngOnInit(): void {
  }

}
