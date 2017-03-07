import { Component } from '@angular/core';

@Component ({
	selector: 'my-app',
	template: `
	<div class="page-header text-center"><h3>{{title}}</h3></div>
	<ul class="nav nav-pills">
  		<li role="presentation"><a routerLink = "/dashboard">Dashboard</a></li>
  		<li role="presentation"><a routerLink = "/crimes">Crimes</a></li>
	</ul>
	<router-outlet></router-outlet>`
})

export class AppComponent {

	title = 'Acervo de Denúncias';
}


/*<h1>{{title}}</h1>
	<nav class="">
		<a routerLink = "/dashboard">Dashboard</a>
		<a routerLink = "/crimes">crimes</a>
	</nav> */