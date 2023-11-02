import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './tool-bar/header/header.component';
import { NavbarComponent } from './tool-bar/navbar/navbar.component';
import { IconsComponent } from './tool-bar/icons/icons.component';
import { NavbarLinkComponent } from './tool-bar/navbar/navbar-link/navbar-link.component';
import { IconComponent } from './tool-bar/icons/icon/icon.component';
import { MainContentComponent } from './content/main-content/main-content.component';
import { SideContentComponent } from './content/side-content/side-content.component';
import { ProductsListComponent } from './content/main-content/products-list/products-list.component';
import { ProductCardComponent } from './content/main-content/products-list/product-card/product-card.component';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    IconsComponent,
    NavbarLinkComponent,
    IconComponent,
    MainContentComponent,
    SideContentComponent,
    ProductsListComponent,
    ProductCardComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
