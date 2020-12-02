import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
 import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './auth.service';

import { ApiResourceService } from './api-resource.service';
import { EventService } from './event.service';
import{UserRoleService} from './user-role.service';
import{ClientServiceService} from './services/client-service.service';
import {IdentityServiceService} from './services/identity-service.service'
import { TokenInterceptorService } from './token-interceptor.service';
import { UserRoleComponent } from './user-role/user-role.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientListeComponent } from './client/client-liste/client-liste.component';
import { ClientFormComponent } from './Client/client-form/client-form.component';
import { IdentityComponentComponent } from './Identity/identity-component/identity-component.component';
import { IdentityClaimsComponentComponent } from './Identity/identity-claims-component/identity-claims-component.component';
import { IdentityClaimsFromComponentComponent } from './Identity/identity-claims-from-component/identity-claims-from-component.component';
import { ClientFromComponentsComponent } from './client/client-from-components/client-from-components.component';
import { ClientDataComponent } from './client/client-data/client-data.component';
import { RoleComponent } from './role/role.component';
import { RoleService } from './services/role.service';
import { UserRoleFormComponent } from './user-role-form/user-role-form.component';
import { ClientDetailsComponent } from './client/client-details/client-details.component';
import { ApiResourceComponent } from './api-resource/api-resource.component';
import { APiScopesComponent } from './api-scopes/api-scopes.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { UploadComponent } from './upload/upload.component';
import { UpdateUserComponent } from './update-user/update-user.component';


@NgModule({
   exports: [
    AppRoutingModule
    ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    SpecialEventsComponent,
    UserRoleComponent,
    ProfileComponent,
    ClientFormComponent,
    ClientListeComponent,
    IdentityComponentComponent,
    IdentityClaimsComponentComponent,
    IdentityClaimsFromComponentComponent,
    ClientFromComponentsComponent,
    ClientDataComponent,
    RoleComponent,
    UserRoleFormComponent,
    ClientDetailsComponent,
    ApiResourceComponent,
    APiScopesComponent,
    HeaderComponent,
    FooterComponent,
    UploadComponent,
    UpdateUserComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    HttpModule,

   
  ],
  providers: [AuthService, AuthGuard, EventService, UserRoleService,ClientServiceService,IdentityServiceService,RoleService,ApiResourceService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
