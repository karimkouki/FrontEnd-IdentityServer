import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './auth.guard';

import{UserRoleComponent} from './user-role/user-role.component';
import{ProfileComponent} from './profile/profile.component';
import{ClientFromComponentsComponent} from './client/client-from-components/client-from-components.component';
import{ClientListeComponent} from './client/client-liste/client-liste.component';
import{IdentityComponentComponent} from './Identity/identity-component/identity-component.component';
import{IdentityClaimsComponentComponent} from './Identity/identity-claims-component/identity-claims-component.component';
import{IdentityClaimsFromComponentComponent} from './Identity/identity-claims-from-component/identity-claims-from-component.component';
import { ClientDataComponent } from './client/client-data/client-data.component';
import { RoleComponent } from './role/role.component';
import { UserRoleFormComponent } from './user-role-form/user-role-form.component';
import { ClientDetailsComponent } from './client/client-details/client-details.component';
import { ApiResourceComponent } from './api-resource/api-resource.component';
import { APiScopesComponent } from './api-scopes/api-scopes.component';
import { AppComponent } from './app.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
   {
   path: 'events',
    component: EventsComponent
   },
  {
    path: 'ClientForm',
    component: ClientFromComponentsComponent
  },
  


  


  {
    path: 'APiScopes/:id',
    component: APiScopesComponent
  },
  {
    path: 'ApiResource',
    component: ApiResourceComponent
  },
  


  {
    path: 'ClientDetails/:id',
    component: ClientDetailsComponent
  },
  {
    path: 'ClientData/:id',
    component: ClientDataComponent
  },

  {
    path: 'Role',
    component: RoleComponent
  },
  
  {
    path: 'UserRole',
    component: UserRoleComponent
  },
  {
    path: 'UserRoleFrom/:id',
    component: UserRoleFormComponent
  },
  {
    path: 'IdentityClaimsFrom',
    component: IdentityClaimsFromComponentComponent
  },

  


  {
    path: 'IdentityClaims',
    component: IdentityClaimsComponentComponent
  },

  {
    path: 'Identity',
    component: IdentityComponentComponent
  },
  {
    path: 'Profile',
    component: ProfileComponent
  },
  {
    path: 'special',
    canActivate: [AuthGuard],
    component: SpecialEventsComponent 
  },
  {
    path: 'events',
   
    component: SpecialEventsComponent
  },
  {
    path: 'UpdateUser',
   
    component: UpdateUserComponent
  },


  {
    path: 'login',
    component: LoginComponent 
    
  },

  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'ClientList',
    component: ClientListeComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
