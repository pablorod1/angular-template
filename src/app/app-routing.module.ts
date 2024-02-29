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
import { RegularTablesComponent } from './pages/regular-tables/regular-tables.component';
import { ExtendedTablesComponent } from './pages/extended-tables/extended-tables.component';
import { AdminComponent } from './components/admin/admin.component';
import { adminGuard } from './guards/admin.guard';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PricingComponent } from './pages/pricing/pricing.component';



const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register1', component: Register1Component},
  {path: 'register2', component: Register2Component},
  {path: 'login1', component: Login1Component},
  {path: 'profile', component: ProfileComponent},
  {path: 'acc-settings', component: AccountSettingsComponent},
  {path: 'login2', component: Login2Component},
  {path: 'animated1', component: Animated1Component},
  {path: 'gallery', component: GalleryComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'product', component: ProductComponent},
  {path: 'regular', component: RegularTablesComponent},
  {path: 'extended', component: ExtendedTablesComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'pricing', component:PricingComponent},
  {path: 'admin', component:AdminComponent, canActivate:[adminGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
