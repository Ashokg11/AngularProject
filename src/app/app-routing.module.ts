import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path:'', redirectTo:'/login', pathMatch:'full'
  },
  {
    path:'login',
    loadChildren:()=>import('./features/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./features/dashboard/dashboard.module').then(m=>m.DashboardModule),
    canActivate:[authGuard]
  },
  {
    path:'employees',
    loadChildren:()=>import('./features/employees/employees.module').then(m=>m.EmployeesModule),
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
