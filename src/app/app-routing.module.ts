import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ContentComponent },
  { path: 'gallery', component: FooterComponent },
  { path: 'cart', component: FooterComponent },
 { path: 'paiment', component:FooterComponent },
 { path: 'about', component:FooterComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
