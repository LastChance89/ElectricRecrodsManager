import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoggedInAuthenticatorService } from './services/logged-in-authenticator.service'
import { MainPageComponent } from './main-page/main-page.component'
import { ClientDashboardComponent } from './clientInfo/client-dashboard.component'
import { AccountComponent } from './account/account.component'
import {RecordDisplay} from './records/recordDisplay/record-display.component'

const routes: Routes = [
	{path: '', redirectTo: 'login', pathMatch: 'full'},
	{path: 'login',component: LoginComponent,},
	{path: 'login/createAccount',component: AccountComponent,},
	{path: 'client',component: ClientDashboardComponent,canActivate: [LoggedInAuthenticatorService]},
	{path: 'application',component: MainPageComponent,canActivate: [LoggedInAuthenticatorService]},
	{path: 'records/:accNum',component: RecordDisplay,canActivate: [LoggedInAuthenticatorService]}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
