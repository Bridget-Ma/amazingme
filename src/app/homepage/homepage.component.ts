// TODO SOMEDAY: Feature Componetized like CrisisCenter
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
	template:`

  <div align = "center" style = "margin-top:20px;background-color: #ffffff; height: 700px" >
	<img src="../../assets/homepage.jpg" width= "95%">


	<br />
  <div style="margin-top: 60px">
	 <button mat-raised-button style="backgroundcolor:white" routerLink="/login" routerLinkActive="active">Start Journey</button>
	</div>
	</div>

	`,
	 styles: [`

  `]
  
})

export class HomepageComponent{

}


// export class HomepageComponent implements OnInit {
  
//   ngOnInit() {
    
//   }

  

// }
// export class HomepageComponent implements OnInit {
//   heroes: Hero[];

//   private selectedId: number;

//   constructor(
//     private service: HeroService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit() {
//     this.route.params.forEach((params: Params) => {
//         this.selectedId = +params['id'];
//         this.service.getHeroes()
//           .then(heroes => this.heroes = heroes);
//       });
//   }

//   isSelected(hero: Hero) { return hero.id === this.selectedId; }

//   onSelect(hero: Hero) {
//     this.router.navigate(['/hero', hero.id]);
//   }

// }

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/