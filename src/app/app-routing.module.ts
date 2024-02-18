import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CrudListComponent } from './crud-list/crud-list.component';
import { CrudStandaloneComponent } from './crud-standalone/crud-standalone.component';
import { AddComponent } from './crud-standalone/add/add.component';
import { UpdateComponent } from './crud-standalone/update/update.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  // { path: 'crud', component: CrudListComponent },
  { path: 'crud', component: CrudStandaloneComponent },
  {
    path: 'add',
    component: AddComponent,
  },

  {
    path: 'update/:id',
    component: UpdateComponent,
  },

  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CrudStandaloneComponent],
  exports: [RouterModule],
})
export class AppRoutingModule {}
