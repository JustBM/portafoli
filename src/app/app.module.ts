import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './shared/pages/portafolio/portafolio.component';
import { AboutComponent } from './shared/pages/about/about.component';
import { ItemsComponent } from './shared/pages/items/items.component';
import{HttpClientModule} from "@angular/common/http";
//Ruta
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
