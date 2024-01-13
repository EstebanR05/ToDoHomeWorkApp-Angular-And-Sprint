import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { PlaformRoutingModule } from './plaform-routing.module';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileCardComponent } from './profile/profile-card/profile-card.component';
import { ProfileModalComponent } from './profile/profile-modal/profile-modal.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileListComponent,
    ProfileCardComponent,
    ProfileModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PlaformRoutingModule
  ],
})
export class PlatformModule { }
