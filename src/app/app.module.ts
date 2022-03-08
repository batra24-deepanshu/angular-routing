import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/guards/auth-guard.service';
import { DeactivateGuardSerice } from './service/guards/deactivate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CategoriesComponent,
    HomeComponent,
    UserComponent,
    EditUserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,AuthGuardService,DeactivateGuardSerice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
