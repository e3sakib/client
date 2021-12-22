import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { AuthGuard } from './guards/auth.guard';
import { LocationComponent } from './location/location.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:"location", component: LocationComponent},
  {path:"product", component: ProductComponent},
  {path:"employee", component: EmployeeComponent},
  {path: '', component: LayoutComponent, canActivateChild: [AuthGuard], children: [
    {path: '', component: HomeComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
