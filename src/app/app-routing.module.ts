import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Login1Component } from './pages/login1/login1.component';
import { Register1Component } from './pages/register1/register1.component';
import { Register2Component } from './pages/register2/register2.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { Login2Component } from './pages/login2/login2.component';
import { Animated1Component } from './pages/animated1/animated1.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductComponent } from './pages/product/product.component';



const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'register1', component: Register1Component},
  {path:'register2', component: Register2Component},
  {path:'login1', component: Login1Component},
  {path:'profile', component: ProfileComponent},
  {path:'acc-settings', component: AccountSettingsComponent},
  {path:'login2', component: Login2Component},
  {path:'animated1', component: Animated1Component},
  {path:'gallery', component: GalleryComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'product', component: ProductComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
