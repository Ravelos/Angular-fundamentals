import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { LoginComponent } from './login-component/login.component';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoutes), FormsModule],
  declarations: [LoginComponent, ProfileComponent],
  providers: [],
})
export class UserModule {}
