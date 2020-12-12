import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';
import { TamagotchiListComponent } from './tamagotchi-list/tamagotchi-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: "", component: TamagotchiListComponent, pathMatch: "full", canActivate: [AuthGuard] },
    { path: "login", component: LoginComponent },
    { path: "**", redirectTo: "/" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
