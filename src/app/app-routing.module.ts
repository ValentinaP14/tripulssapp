import { ConductorComponent } from './components/dashboard/conductor/conductor.component';
import { PasajeroComponent } from './components/dashboard/pasajero/pasajero.component';
import { MicuentaComponent } from './components/dashboard/micuenta/micuenta.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent} from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';



const routes: Routes = [
  { path: 'home' , component: BodyComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'registro' , component: RegistroComponent},
  { path: 'dashboard' , component: DashboardComponent,
    children: [
    { path: 'micuenta' , component: MicuentaComponent},
    { path: 'pasajero' , component: PasajeroComponent },
    { path: 'conductor' , component: ConductorComponent },
    { path: '**', redirectTo: 'micuenta', pathMatch: 'full' }
    ] 
  },
  { path: '**' , pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
