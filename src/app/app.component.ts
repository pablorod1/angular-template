import { Component, OnInit, inject } from '@angular/core';
import { RbacService } from './services/rbac.service';
import { Roles } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent{
  title = 'proyecto1';

  readonly rbacService = inject(RbacService);

  constructor() {
    // Assuming the roles and authenticated came from the server
    this.rbacService.setRoles([
      {
        id: 1,
        name: 'Customer',
        uid: 'CUSTOMER',
        extends: null,
      },
      {
        id: 2,
        name: 'Seller',
        uid: 'SELLER',
        extends: null,
      },
      {
        id: 3,
        name: 'Administrator',
        uid: 'ADMINISTRATOR',
        extends: 2,
      },
    ]);
    this.rbacService.setAuthenticatedUser({
      id: 1,
      name:'Username',
      role: {
        id: 2,
        name: 'Administrator',
        uid: 'ADMINISTRATOR',
        extends: null,
      },
    });
  }

  ngOnInit() {
    if (this.rbacService.isGranted(Roles.ADMINISTRATOR)) {
      console.log('Access granted for administrator!');
    } else {
      console.log('Access denied for administrator!');
    }

    if (this.rbacService.isGranted(Roles.SELLER)) {
      console.log('Access granted for seller!');
    } else {
      console.log('Access denied for seller!');
    }

    if (this.rbacService.isGranted(Roles.CUSTOMER)) {
      console.log('Access granted for client!');
    } else {
      console.log('Access denied for client!');
    }
  }
}
