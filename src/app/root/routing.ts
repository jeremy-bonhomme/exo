import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppC } from '../main/component';
import { UserDetailsC } from '../users/handler/details';
import { UserListC } from '../users/handler/list';

const APP_ROUTES: Route [] = [
  { path: '', pathMatch: 'full', redirectTo: 'exo' },
  { path: 'exo', component: UserListC },
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot( APP_ROUTES );
