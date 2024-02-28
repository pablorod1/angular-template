import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MenuIconComponent } from './icons/menu-icon/menu-icon.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { KeyIconComponent } from './icons/key-icon/key-icon.component';
import { UserIconComponent } from './icons/user-icon/user-icon.component';
import { EmailIconComponent } from './icons/email-icon/email-icon.component';
import { GoogleIconComponent } from './icons/google-icon/google-icon.component';
import { LoginComponent } from './pages/login/login.component';
import { PaletteComponent } from './components/palette/palette.component';
import { Register1Component } from './pages/register1/register1.component';
import { Login1Component } from './pages/login1/login1.component';
import { Register2Component } from './pages/register2/register2.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { AccountSettingsIconComponent } from './icons/account-settings-icon/account-settings-icon.component';
import { LoginIconComponent } from './icons/login-icon/login-icon.component';
import { FormIconComponent } from './icons/form-icon/form-icon.component';
import { Login2Component } from './pages/login2/login2.component';
import { Animated1Component } from './pages/animated1/animated1.component';
import { PcIconComponent } from './icons/pc-icon/pc-icon.component';
import { GreenCheckComponent } from './icons/green-check/green-check.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { FacebookIconComponent } from './icons/facebook-icon/facebook-icon.component';
import { InstagramIconComponent } from './icons/instagram-icon/instagram-icon.component';
import { GithubIconComponent } from './icons/github-icon/github-icon.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NotificationIconComponent } from './icons/notification-icon/notification-icon.component';
import { CartIconComponent } from './icons/cart-icon/cart-icon.component';
import { ConfigIconComponent } from './icons/config-icon/config-icon.component';
import { AddtocartIconComponent } from './icons/addtocart-icon/addtocart-icon.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchIconComponent } from './icons/search-icon/search-icon.component';
import { CloseIconComponent } from './icons/close-icon/close-icon.component';
import { ProductComponent } from './pages/product/product.component';
import { StarIconComponent } from './icons/star-icon/star-icon.component';
import { HalfStarIconComponent } from './icons/half-star-icon/half-star-icon.component';
import { ArrowRightCircleComponent } from './icons/arrow-right-circle/arrow-right-circle.component';
import { ArrowLeftCircleComponent } from './icons/arrow-left-circle/arrow-left-circle.component';
import { TableModule } from 'primeng/table';
import { MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CaretLeftComponent } from './icons/caret-left/caret-left.component';
import { LogoutIconComponent } from './icons/logout-icon/logout-icon.component';
import { SuitcaseIconComponent } from './icons/suitcase-icon/suitcase-icon.component';
import { LogoutPopupComponent } from './components/logout-popup/logout-popup.component';
import { RegularTablesComponent } from './pages/regular-tables/regular-tables.component';
import { ExtendedTablesComponent } from './pages/extended-tables/extended-tables.component';
import {TagModule}  from 'primeng/tag';
import {RatingModule} from 'primeng/rating';
import { DropdownModule } from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import { FieldsetModule } from 'primeng/fieldset';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AdminComponent } from './components/admin/admin.component';
import { IsGrantedDirective } from './directives/is-granted.directive';
import { UserSelectorComponent } from './components/user-selector/user-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuIconComponent,
    KeyIconComponent,
    UserIconComponent,
    EmailIconComponent,
    GoogleIconComponent,
    LoginComponent,
    PaletteComponent,
    HomeComponent,
    Register1Component,
    Login1Component,
    Register2Component,
    ProfileComponent,
    AccountSettingsComponent,
    AccountSettingsIconComponent,
    LoginIconComponent,
    FormIconComponent,
    Login2Component,
    Animated1Component,
    PcIconComponent,
    GreenCheckComponent,
    GalleryComponent,
    FacebookIconComponent,
    InstagramIconComponent,
    GithubIconComponent,
    NotificationIconComponent,
    CartIconComponent,
    ConfigIconComponent,
    AddtocartIconComponent,
    CartComponent,
    SidenavComponent,
    SearchbarComponent,
    SearchIconComponent,
    CloseIconComponent,
    ProductComponent,
    StarIconComponent,
    HalfStarIconComponent,
    ArrowRightCircleComponent,
    ArrowLeftCircleComponent,
    CheckoutComponent,
    CaretLeftComponent,
    LogoutIconComponent,
    SuitcaseIconComponent,
    LogoutPopupComponent,
    RegularTablesComponent,
    ExtendedTablesComponent,
    AdminComponent,
    IsGrantedDirective,
    UserSelectorComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSidenav,
    MatSidenavModule,
    MatDividerModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    TableModule,
    TagModule,
    RatingModule,
    DropdownModule,
    MultiSelectModule,
    MatTooltipModule,
    MatToolbarModule,
    DialogModule,
    ConfirmDialogModule,
    MessagesModule,
    FieldsetModule,
    RadioButtonModule,
    
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
