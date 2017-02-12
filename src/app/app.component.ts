import { Component,ViewContainerRef } from '@angular/core';
import { AngularFire, FirebaseListObservable,AuthProviders, AuthMethods } from 'angularfire2';
// import { Hero } from './hero';


// const HEROES: Hero[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];

@Component({
  selector: 'amazingme-app',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`

  //   .input {
  //     cursor: pointer;
  //     position: relative;
  //     left: 0;
  //     background-color: #EEE;
  //     margin: .5em;
  //     padding: .3em 0;
  //     height: 1.6em;
  //     border-radius: 4px;
  //   }

  //   .login {
  //     margin: 0 0 2em 0;
  //     list-style-type: none;
  //     padding: 0;
  //   }

  //   .login label {
  //     margin: 2em 2em 2em 2em;
  //     width:20em;
  //   }

  //   .login input {
  //     cursor: pointer;
  //     position: relative;
  //     left: 0;
  //     background-color: #EEE;
  //     margin: .5em;
  //     padding: .3em 0;
  //     height: 2em;
  //     width: 20em;
  //     border-radius: 4px;
  //     font-size: 100%
  //   }

  //   .login button {
  //     font-family: Arial;
  //     font-size: 100%;
  //     background-color: #eee;
  //     border: none;
  //     margin: 2em 2em 2em 0;
  //     padding: 5px 10px;
  //     border-radius: 4px;
  //     cursor: pointer;
  //     cursor: hand;
  //     height: 3em;
  //     width: 8em;
  //   }

  //   .login button.selected:hover {
  //     background-color: #BBD8DC !important;
  //     color: white;
  //   }
  //   .login button:hover {
  //     color: #607D8B;
  //     background-color: #DDD;
  //     left: .1em;
  //   }


  //   .selected {
  //     background-color: #CFD8DC !important;
  //     color: white;
  //   }



  //   .heroes {
  //     margin: 0 0 2em 0;
  //     list-style-type: none;
  //     padding: 0;
  //     width: 15em;
  //   }
  //   .heroes li {
  //     cursor: pointer;
  //     position: relative;
  //     left: 0;
  //     background-color: #EEE;
  //     margin: .5em;
  //     padding: .3em 0;
  //     height: 1.6em;
  //     border-radius: 4px;
  //   }
  //   .heroes li.selected:hover {
  //     background-color: #BBD8DC !important;
  //     color: white;
  //   }
  //   .heroes li:hover {
  //     color: #607D8B;
  //     background-color: #DDD;
  //     left: .1em;
  //   }
  //   .heroes .text {
  //     position: relative;
  //     top: -3px;
  //   }
  //   .heroes .badge {
  //     display: inline-block;
  //     font-size: small;
  //     color: white;
  //     padding: 0.8em 0.7em 0 0.7em;
  //     background-color: #607D8B;
  //     line-height: 1em;
  //     position: relative;
  //     left: -1px;
  //     top: -4px;
  //     height: 1.8em;
  //     margin-right: .8em;
  //     border-radius: 4px 0 0 4px;
  //   }
  // `]
})


export class AppComponent {

  items: FirebaseListObservable<any[]>;

 constructor(public af: AngularFire) {
    // this.af.auth.subscribe(auth => console.log(auth));
    // this.items = af.database.list('/items');
  }


  // login() {
  //   this.af.auth.login({
  //     provider: AuthProviders.Twitter,
  //     method: AuthMethods.Popup,
  //   });
  // }
  // overrideLogin() {
  //   this.af.auth.login({
  //     provider: AuthProviders.Anonymous,
  //     method: AuthMethods.Anonymous,
  //   });
  // }

  //     private viewContainerRef: ViewContainerRef;

  // public constructor(viewContainerRef:ViewContainerRef) {
  //   // You need this small hack in order to catch application root view container ref
  //   this.viewContainerRef = viewContainerRef;
  // }

  // title = 'Tour of Heroes';
  // heroes = HEROES;
  // selectedHero: Hero;

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
}

