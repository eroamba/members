import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: 'auth',
  loadChildren:()=>import("./auth/auth.module").then(m=> m.AuthModule),
  },
  {path: 'members',
  loadChildren:()=>import("./member/member.module").then(m=> m.MemberModule),
  canActivate: [AuthGuard]
  },
  {path: '', redirectTo: 'auth', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
