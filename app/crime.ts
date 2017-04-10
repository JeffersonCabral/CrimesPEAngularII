
export class Crime{
	constructor(
		public id?: number,
		public cidade?: string,
		public data?:string,
		public idade?:number,
		public nome_vitima?: string,
		public objeto_utilizado?: string,
		public qtd_vitimas?: number,
		public sexo?:string,
		public tipo_crime?:string){}
}

