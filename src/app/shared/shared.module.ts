import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule  }  from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { InputHelpComponent } from './input-help/input-help.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [NotFoundComponent, ModalComponent, RegisterFormComponent, InputHelpComponent, LoginFormComponent, UserNavComponent, PaginationComponent],
  exports:[
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
    ModalComponent,
    RegisterFormComponent,
    InputHelpComponent,
    LoginFormComponent,
    UserNavComponent,
    PaginationComponent
  ],
  providers: [
  ],
  entryComponents: [ModalComponent]
})
export class SharedModule { }
