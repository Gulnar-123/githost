import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},

    {path:'register',component:RegisterComponent},
    {path:'view',component:ViewComponent},
    {path:'**',redirectTo:'home',pathMatch:'full'},

];
