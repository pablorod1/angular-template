import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { RbacService } from '../services/rbac.service';
import { Roles } from '../types';

export const adminGuard: CanActivateFn = (route, state) => {
  return inject(RbacService).isGranted(Roles.ADMINISTRATOR);
};
