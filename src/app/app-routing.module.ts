import { NgModule } from '@angular/core';
// Rutas
import { Routes, RouterModule } from '@angular/router';
// Components
import { AppComponent } from './app.component';
import { PortafolioComponent } from './shared/pages/portafolio/portafolio.component';
import { AboutComponent } from './shared/pages/about/about.component';
import { ItemsComponent } from './shared/pages/items/items.component';

const app_routes:Routes =[
    { path: 'inicio', component:PortafolioComponent},
    { path: 'about', component:AboutComponent},
    { path: 'item', component:ItemsComponent},
    { path: '**', pathMatch:'full',redirectTo:'inicio'},
];

@NgModule({
imports: [
    RouterModule.forRoot(app_routes, {useHash:true})
],
exports: [
    RouterModule
]
})
export class AppRoutingModule { }