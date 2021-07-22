import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importamos las rutas
import { HomeComponent } from './components/home/home.component';
import { GraficaComponent } from './components/grafica/grafica.component';
import { RegistroComponent } from './components/registro/registro.component';

//routes
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'grafica', component: GraficaComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
