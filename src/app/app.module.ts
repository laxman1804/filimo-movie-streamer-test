import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlaySeriesComponent } from './play-series/play-series.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCarouselComponent } from './list-carousel/list-carousel.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent } ,
  { path: 'Home', component: HomeComponent },
 
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlaySeriesComponent,
    AboutusComponent,
    HomeComponent,
    ListCarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
