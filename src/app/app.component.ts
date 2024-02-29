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
      id: 3,
      name:'Administrator',
      role: {
        id: 3,
        name: 'Administrator',
        uid: 'ADMINISTRATOR',
        extends: 2,
      },
    });
  }
}
