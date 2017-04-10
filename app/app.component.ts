import { Component } from '@angular/core';

@Component ({
	selector: 'my-app',
	template: `
	<div class="">
	<ul class="nav nav-tabs">
		<li role="presentation"><a routerLink = "/inserirCrimes">Denunciar Crimes</a></li>
  		<li role="presentation"><a routerLink = "/dashboard">Painel de Vítimas</a></li>
  		<li role="presentation"><a routerLink = "/crimes">Detalhe do Crime</a></li>
	</ul>
	</div>
	<div class="page-header text-center"><h4><strong>{{title}}</strong></h4></div>
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