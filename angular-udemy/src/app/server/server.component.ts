import { style } from '@angular/animations';
import { Component } from '@angular/core';

// Decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
@Component({
   selector: 'app-server',
   templateUrl: './server.component.html',
   styles: [`
      .online {
         color: white;
      }
   `]
})

export class ServerComponent {
   public serverId: number = 10;
   private serverStatus: string = 'offline';

   constructor() {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }

   public getServerStatus(): string {
      return this.serverStatus;
   }

   public getColor(): string {
      return this.serverStatus === 'online' ? 'green' : 'red';
   }
}