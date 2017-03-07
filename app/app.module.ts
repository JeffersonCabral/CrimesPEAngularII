import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';
import {CrimeDetailComponent} from './crime-detail.component';
import {DashboardComponent} from './dashboard.component';
import {CrimesComponent} from './crimes.component';

import { PagerService } from './_services/index';
import {CrimeService} from './_services/crime.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'crimes',
                component: CrimesComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'detail/:id',
                component: CrimeDetailComponent
             }
        
        ])
    ],
    declarations: [
        AppComponent,
        CrimeDetailComponent,
        DashboardComponent,
        CrimesComponent
    ],
    providers: [
        PagerService,
        CrimeService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }