// TODO SOMEDAY: Feature Componetized like CrisisCenter
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
	template:`

  
	<img src="../../assets/images/homepage1.jpg">
	<div class = "blockdiv" align = center margin = 10em>
	<br />
	 <a button md-raised-button  routerLink="/login" routerLinkActive="active">Start Journey</a>
	
	</div>

	`,
	 styles: [`

    .blockdiv {
      align = center;
      position: relative;
      left: 0;
      vertical-align = center;
      background-color: white;
      margin: .5em;
      padding: 3em 3em;
      height: 10em;
      border-radius: 4px;
    }
   


   
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