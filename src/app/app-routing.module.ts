import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AuthenticationFormComponent } from './authentication-form/authentication-form.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ContentComponent },
  {path:'login',component:AuthenticationFormComponent},
  { path: 'gallery', component: GalleryComponent },
  { path: 'cart', component: FooterComponent },
 { path: 'paiment', component:FooterComponent },
 { path: 'about', component:FooterComponent },
 {path:'login',component:AuthenticationFormComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
