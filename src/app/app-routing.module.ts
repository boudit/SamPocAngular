import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OrderLoggingComponent } from './sam-modules/jb/order-logging/order-logging.component';
import { OrdersComponent } from './sam-modules/iz/order/orders/orders.component';

const routes: Routes = [
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component: MainComponent},
    {path: 'dev/jb', component: OrderLoggingComponent},
    {path: 'dev/iz', component: OrdersComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }