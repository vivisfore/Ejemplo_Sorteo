import { Routes } from '@angular/router';
import { MensajeComponent } from './mensaje/mensaje.component';
import { SorteoComponent } from './sorteo/sorteo.component';


export const routes: Routes = [
    {path:"mensaje", component:MensajeComponent},
    {path:"sorteo", component:SorteoComponent}
];
