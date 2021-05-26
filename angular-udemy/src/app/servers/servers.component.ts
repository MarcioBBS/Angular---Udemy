import { Component, OnInit } from '@angular/core';

@Component({
//   selector: '[app-servers]', // Using selector as Attribute
//   selector: '.app-servers', // Using selector as Classes
  selector: 'app-servers',
  template: `
   <app-server></app-server>
   <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
