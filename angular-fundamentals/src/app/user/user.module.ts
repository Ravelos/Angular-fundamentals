import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
  declarations: [],
  providers: [],
})
export class UserModule {}
