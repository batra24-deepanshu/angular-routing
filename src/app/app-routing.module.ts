import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuardService } from './service/guards/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent,canActivateChild:[AuthGuardService], children: [{ path: ':id/:name', component: UserComponent },
  { path: ':id/:name/edit', component: EditUserComponent }] },

  { path: 'categories', component: CategoriesComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  {path:'**',redirectTo:'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
