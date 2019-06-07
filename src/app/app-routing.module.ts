import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OrderLoggingComponent } from './sam-modules/jb/order-logging/order-logging.component';
<<<<<<< HEAD
import { OrdersComponent } from './sam-modules/iz/order/orders/orders.component';
=======
import { OrderloggingComponent } from './sam-modules/tb/orderlogging/orderlogging.component';
>>>>>>> 311e39b24824a56c3be9a5bcfaeeb2b6479270a0

const routes: Routes = [
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component: MainComponent},
    {path: 'dev/jb', component: OrderLoggingComponent},
<<<<<<< HEAD
    {path: 'dev/iz', component: OrdersComponent}
=======
    {path: 'dev/tb', component: OrderloggingComponent}
>>>>>>> 311e39b24824a56c3be9a5bcfaeeb2b6479270a0
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }