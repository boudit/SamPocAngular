import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OrderLoggingComponent } from './sam-modules/jb/order-logging/order-logging.component';
import { OrderloggingComponent } from './sam-modules/tb/orderlogging/orderlogging.component';

const routes: Routes = [
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component: MainComponent},
    {path: 'dev/jb', component: OrderLoggingComponent},
    {path: 'dev/tb', component: OrderloggingComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }