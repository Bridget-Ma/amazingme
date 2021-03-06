import { Component }        from '@angular/core';
import { Router,
         NavigationExtras,ActivatedRoute, Params } from '@angular/router';
import { AuthService }      from './auth.service';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {map} from 'rxjs/operator/map';
import { Observable } from 'rxjs/Observable';

import {MatButton} from '@angular/material';




@Component({
  templateUrl:'login.html',
  styleUrls: ['./app.component.css']

})

export class LoginComponent {

  


  constructor(
    public af: AngularFireDatabase, 
    public authService: AuthService, 
    public router: Router,
    public afAuth: AngularFireAuth,
    ) {

    this.userList= af.list('/userList');
    // this.user = afAuth.auth.currentUser;

    
    };


    public userChecklist = 

    {
      "Milestone1" : {
        "detail" : "Children copying their friends.",
        "icon" : "../../assets/images/staricons/1.png",
        "id" : 1,
        "img" : "../../assets/images/milestone1.jpg",
        "name" : "Copies adults and friends (like running when other children run)",
        "notes" : "",
        "progress" : 0,
        "video" : false,
        "submilestone" : {
             "checkbox1" : {
                "name" : "Copy adults",
                "state" : false
            },
             "checkbox2" : {
                "name" : "Copy friends",
                "state" : false
            },
             "checkbox3" : {
                "name" : "Copy behaviors",
                "state" : false
            },
             "checkbox4" : {
                "name" : "Copy conversations",
                "state" : false
            }
        }
      },
      "Milestone10" : {
        "detail" : "In this video, a little boy follows instructions with 2 steps",
        "link" : "www.cdc.gov/ncbddd/actearly/milestones/photolibrary/videos/3years/language/3-years_follows-instructions-with-2-or-3-steps.mp4",
        "icon" : "../../assets/images/staricons/10.png",
        "id" : 10,
        "img" : "../../assets/images/milestone10.jpg",
        "name" : "Follows instructions with 2 or 3 steps",
        "notes" : "",
        "progress" : 0,
        "video" : true,
        "submilestone" : {
             "checkbox1" : {
                "name" : "1 step",
                "state" : false
            },
             "checkbox2" : {
                "name" : "2 steps",
                "state" : false
            },
             "checkbox3" : {
                "name" : "3 steps",
                "state" : false
            },
             "checkbox4" : {
                "name" : "4 steps or more",
                "state" : false
            }
        }
      },
      "Milestone11" : {
        "detail" : "This little boy is able to name many familiar things.",
        "link" : "www.cdc.gov/ncbddd/actearly/milestones/photolibrary/videos/3years/language/3-years_can-name-most-familiar-things.mp4",
        "icon" : "../../assets/images/staricons/11.png",
        "video" : true,
        "id" : 11,
        "img" : "../../assets/images/milestone11.jpg",
        "name" : "Can name most familiar things",
        "notes" : "",
        "progress" : 0,
        "submilestone" : {
             "checkbox1" : {
                "name" : "Food",
                "state" : false
            },
             "checkbox2" : {
                "name" : "Furniture",
                "state" : false
            },
             "checkbox3" : {
                "name" : "Body parts",
                "state" : false
            },
             "checkbox4" : {
                "name" : "Toys",
                "state" : false
            }
        }
      },
      "Milestone12" : {
        "detail" : "In this video, a little girl displays her understanding of in, on, and under.",
        "link" : "www.cdc.gov/ncbddd/actearly/milestones/photolibrary/videos/3years/language/3-years_understands-words-like-in-on-and-under.mp4",
        "icon" : "../../assets/images/staricons/12.png",
        "video" : true,
        "id" : 12,
        "img" : "../../assets/images/milestone12.jpg",
        "name" : "Understands words like 'in', 'on' and 'under'",
        "notes" : "",
        "progress" : 0,
        "submilestone" : {
             "checkbox1" : {
                "name" : "In",
                "state" : false
            },
             "checkbox2" : {
                "name" : "On",
                "state" : false
            },
             "checkbox3" : {
                "name" : "Under",
                "state" : false
            },
             "checkbox4" : {
                "name" : "In front/ behind",
                "state" : false
            }
        }
      },
      "Milestone13" : {
        "detail" : "Detail explanations here ",
        "icon" : "../../assets/images/staricons/13.png",
        "id" : 13,
        "img" : "../../assets/images/milestone13.jpg",
        "name" : "Says first name, age, and sex",
        "notes" : "",
        "progress" : 0,
        "video" : false,
        "submilestone" : {
             "checkbox1" : {
                "name" : "First name",
                "state" : false
            },
             "checkbox2" : {
                "name" : "Age",
                "state" : false
            },
             "checkbox3" : {
                "name" : "Sex",
                "state" : false
            },
             "checkbox4" : {
                "name" : "Other",
                "state" : false
            }
        }
      },
      "Milestone14" : {
        "detail" : "By naming a friend, this little boy is displaying a 3-year language/communication milestone.",
        "link" : "www.cdc.gov/ncbddd/actearly/milestones/photolibrary/videos/3years/language/3-years_names-a-friend.mp4",
        "icon" : "../../assets/images/staricons/14.png",
        "video" : true,
        "id" : 14,
        "img" : "../../assets/images/milestone14.jpg",
        "name" : "Names a friend",
        "notes" : "",
        "progress" : 0
      },
      "Milestone15" : {
        "detail" : "In the first video clip, the little boy uses 'I'. In the second clip, a little boy uses the plural, 'wheels. Using words like these is a 3-year language/communication milestones.",
        "link" : "www.cdc.gov/ncbddd/actearly/milestones/photolibrary/videos/3years/language/3-years_says-words-like-i-me-we-and-you-and-some-plurals.mp4",
        "icon" : "../../assets/images/staricons/15.png",
        "video" : true,
        "id" : 15,
        "img" : "../../assets/images/milestone15.jpg",
        "name" : "Says works like 'I', 'me', 'we' and 'you' and some plurals (cars, dogs, cats)",
        "notes" : "",
        "progress" : 0,
        "submilestone" : {
             "checkbox1" : {
                "name" : "'I/Me'",
                "state" : false
            },
             "checkbox2" : {
                "name" : "'We'",
                "state" : false
            },
             "checkbox3" : {
                "name" : "'You'",
                "state" : false
            },
             "checkbox4" : {
                "name" : "Plurals",
                "state" : false
            }
        }
      },
      "Milestone16" : {
        "detail" : "This video shows how a 3 year-old talks well enough for strangers to understand most of the time.",
        "link" : "www.cdc.gov/ncbddd/actearly/milestones/photolibrary/videos/3years/language/3-years_talks-well-enough-for-strangers-to-understand-most-of-the-time.mp4",
        "icon" : "../../assets/images/staricons/16.png",
        "video" : true,
        "id" : 16,
        "img" : "../../assets/images/milestone16.jpg",
        "name" : "Talks well enough for strangers to understand most of the time",
        "notes" : "",
        "progress" : 0
      },
      "Milestone17" : {
        "detail" : "This video shows how a 3 year-old carries on a conversation using 2 to 3 sentences.",
        "link" : "www.cdc.gov/ncbddd/actearly/milestones/photolibrary/videos/3years/language/3-years_carries-on-a-conversation-using-2-to-3-sentences.mp4",
        "icon" : "../../assets/images/staricons/17.png",
        "video" : true,
        "id" : 17,
        "img" : "../../assets/images/milestone17.jpg",
        "name" : "Carries on a conversation using 2 to 3 sentences",
        "notes" : "",
        "progress" : 0,
        "submilestone" : {
             "checkbox1" : {
                "name" : "2 sentences",
                "state" : false
            },
             "checkbox2" : {
                "name" : "3 sentences",
                "state" : false
            },
             "checkbox3" : {
                "name" : "4 sentences",
                "state" : false
            },
             "checkbox4" : {
                "name" : "5 or more sentences",
                "state" : false
            }
        }
      },
      "Milestone18" : {
        "detail" : "This little boy is playing with the toy by pressing the buttons that make it work. ",
        "video" : false,
        "icon" : "../../assets/images/staricons/18.png",
        "id" : 18,
        "img" : "../../assets/images/milestone18.jpg",
        "name" : "Can work toys with buttons, levers, and moving parts",
        "notes" : "",
        "progress" : 0,
        "submilestone" : {
             "checkbox1" : {
                "name" : "Buttons",
                "state" : false
            },
             "checkbox2" : {
                "name" : "Levers",
                "state" : false
            },
             "checkbox3" : {
                "name" : "Moving parts",
                "state" : false
            },
             "checkbox4" : {
                "name" : "Other",
                "state" : false
            }
        }
      },
      "Milestone19" : {
        "detail" : "This image shows a little boy pretending to doctor on a woman. ",
        "video" : false,
        "icon" : "../../assets/images/staricons/19.png",
        "id" : 19,
        "img" : "../../assets/images/milestone19.jpg",
        "name" : "Plays make-believe with dolls, animals, and people",
        "notes" : "",
        "progress" : 0,
        "submilestone" : {
             "checkbox1" : {
                "name" : "Dolls",
                "state" : false
            },
             "checkbox2" : {
                "name" : "Animals",
                "state" : false
            },
             "checkbox3" : {
                "name" : "People",
                "state" : false
            },
             "checkbox4" : {
                "name" : "Other",
                "state" : false
            }
        }
      },
      "Milestone2" : {
        "detail" : "The little girl in this photo is hugging her friend. ",
        "video" : false,
        "icon" : "../../assets/images/staricons/2.png",
        "id" : 2,
        "img" : "../../assets/images/milestone2.jpg",
        "name" : "Shows affection for friends without prompting",
        "notes" : "",
        "progress" : 0
      },
      "Milestone20" : {
        "detail" : "As this little girl does a puzzle with 3 or 4 pieces, she showcases  a 3-year cognitive (learning, thinking, problem-solving) milestone.",
        "icon" : "../../assets/images/staricons/20.png",
        "video" : false,
        "id" : 20,
        "img" : "../../assets/images/milestone20.jpg",
        "name" : "Does puzzles with 3 or 4 pieces",
        "notes" : "",
        "progress" : 0,
        "submilestone" : {
             "checkbox1" : {
                "name" : "2 pieces",
                "state" : false
            },
             "checkbox2" : {
                "name" : "3 pieces",
                "state" : false
            },
             "checkbox3" : {
                "name" : "4 pieces",
                "state" : false
            },
             "checkbox4" : {
                "name" : "5 pieces",
                "state" : false
            }
        }
      },
      "Milestone21" : {
        "detail" : "By  showing his understanding of 'two, this little boy is displaying a 3-year cognitive (learning, thinking, problem-solving) milestone.",
        "link" : "www.cdc.gov/ncbddd/actearly/milestones/photolibrary/videos/3years/cognitive/3-years_understand-what-two-means.mp4",
        "icon" : "../../assets/images/staricons/21.png",
        "video" : true,
        "id" : 21,
        "img" : "../../assets/images/milestone21.jpg",
        "name" : "Understands what 'two' means",
        "notes" : "",
        "progress" : 0
      },
      "Milestone22" : {
        "detail" : "This little boy is copying a circle ",
        "icon" : "../../assets/images/staricons/22.png",
        "video" : false,
        "id" : 22,
        "img" : "../../assets/images/milestone22.jpg",
        "name" : "Copies a circle with a pencil or crayon",
        "notes" : "",
        "progress" : 0
      },
      "Milestone23" : {
        "detail" : "The little girl in this picture is looking at a book and  turning the pages one at a time ",
        "icon" : "../../assets/images/staricons/23.png",
        "video" : false,
        "id" : 23,
        "img" : "../../assets/images/milestone23.jpg",
        "name" : "Turns book pages one at a time",
        "notes" : "",
        "progress" : 0
      },
      "Milestone24" : {
        "detail" : "This picture shows a boy building a tower of more than 6 block",
        "icon" : "../../assets/images/staricons/24.png",
        "video" : false,
        "id" : 24,
        "img" : "../../assets/images/milestone24.jpg",
        "name" : "Builds towers of more than 6 blocks",
        "notes" : "",
        "progress" : 0,
         "submilestone" : {
             "checkbox1" : {
                "name" : "4 blocks",
                "state" : false
            },
             "checkbox2" : {
                "name" : "5 blocks",
                "state" : false
            },
             "checkbox3" : {
                "name" : "6 blocks",
                "state" : false
            },
             "checkbox4" : {
                "name" : "More than 6 blocks",
                "state" : false
            }
        }

      },
      "Milestone25" : {
        "detail" : "By screwing and unscrewing this jar lid, this little girl is showing a 3-year cognitive (learning, thinking, problem-solving) milestone.",
        "icon" : "../../assets/images/staricons/25.png",
        "video" : false,
        "id" : 25,
        "img" : "../../assets/images/milestone25.jpg",
        "name" : "Screws and unscrews jar lids or turns door handle",
        "notes" : "",
        "progress" : 0,
        "submilestone" : {
             "checkbox1" : {
                "name" : "Screw jar lids",
                "state" : false
            },
             "checkbox2" : {
                "name" : "Unscrew jar lids",
                "state" : false
            },
             "checkbox3" : {
                "name" : "Turn door handle",
                "state" : false
            },
             "checkbox4" : {
                "name" : "Other",
                "state" : false
            }
        }
      },
      "Milestone26" : {
        "detail" : "This little girl easily climbed up this structure.",
        "icon" : "../../assets/images/staricons/26.png",
        "video" : false,
        "id" : 26,
        "img" : "../../assets/images/milestone26.jpg",
        "name" : "Climbs well",
        "notes" : "",
        "progress" : 0
      },
      "Milestone27" : {
        "detail" : "The children in this video are able to run easily",
        "link" : "www.cdc.gov/ncbddd/actearly/milestones/photolibrary/videos/3years/movement/3-years_runs-easily.mp4",
        "icon" : "../../assets/images/staricons/27.png",
        "video" : true,
        "id" : 27,
        "img" : "../../assets/images/milestone27.jpg",
        "name" : "Runs easily",
        "notes" : "",
        "progress" : 0
      },
      "Milestone28" : {
        "detail" : "As this little girl pedals her tricycle, she showcases a 3-year movement/physical development milestone.",
        "icon" : "../../assets/images/staricons/28.png",
        "video" : false,
        "id" : 28,
        "img" : "../../assets/images/milestone28.jpg",
        "name" : "Pedals a tricycle (3-wheeled bike)",
        "notes" : "",
        "progress" : 0
      },
      "Milestone29" : {
        "detail" : "This photo shows a little boy walking down steps with one foot on each step, a 3-year movement/physical development milestone.",
        "icon" : "../../assets/images/staricons/29.png",
        "video" : false,
        "id" : 29,
        "img" : "../../assets/images/milestone29.jpg",
        "name" : "Walks up and down stairs, one foot on each step",
        "notes" : "",
        "progress" : 0,
        "submilestone" : {
            "checkbox1" : {
                "name" : "Walk up stairs",
                "state" : false
            },
             "checkbox2" : {
                "name" : "Walk down stairs",
                "state" : false
            },
             "checkbox3" : {
                "name" : "One foot on each step",
                "state" : false
            },
             "checkbox4" : {
                "name" : "Walk on/down stairs with help",
                "state" : false
            }
        }

      },
      "Milestone3" : {
        "detail" : "These children are taking turns with the basketball",
        "icon" : "../../assets/images/staricons/3.png",
        "video" : false,
        "id" : 3,
        "img" : "../../assets/images/milestone3.jpg",
        "name" : "Takes turns in games",
        "notes" : "",
        "progress" : 0
      },
      "Milestone30" : {
        "detail" : "By pointing to show this adult something interesting, this little girl is displaying an 18-month social/emotional milestone.",
        "icon" : "../../assets/images/staricons/30.png",
        "video" : false,
        "id" : 30,
        "img" : "../../assets/images/milestone30.jpg",
        "name" : "Points to show others something interesting (age 18-month milestone)",
        "notes" : "",
        "progress" : 0
      },
      "Milestone31" : {
        "detail" : "This girl would rather play with her friends than play alone, a 4-year social/emotional milestone.",
        "link" :"www.cdc.gov/ncbddd/actearly/milestones/photolibrary/videos/4years/social/4-years_would-rather-play-with-other-children-than-by-herself.mp4",
        "icon" : "../../assets/images/staricons/31.png",
        "video" : true,
        "id" : 31,
        "img" : "../../assets/images/milestone31.jpg",
        "name" : "Plays well with two or three children in a group (age 4 milestone)",
        "notes" : "",
        "progress" : 0,
         "submilestone" : {
            "checkbox1" : {
                "name" : "Two",
                "state" : false
            },
             "checkbox2" : {
                "name" : "Three",
                "state" : false
            },
             "checkbox3" : {
                "name" : "Four",
                "state" : false
            },
             "checkbox4" : {
                "name" : "Five",
                "state" : false
            }
        }
      },
      "Milestone32" : {
        "detail" : "This little girl is cutting - snipping - with scissors, a 4-year cognitive (learning, thinking, problem-solving) milestone.",
        "icon" : "../../assets/images/staricons/32.png",
        "video" : false,
        "id" : 32,
        "img" : "../../assets/images/milestone32.jpg",
        "name" : "Practices using safety scissors (age 4 milestone) at school",
        "notes" : "",
        "progress" : 0
      },
      "Milestone33" : {
        "detail" : "In this video, a little girl tells a story, a 4-year language/communication milestone. ",
        "link" : "www.cdc.gov/ncbddd/actearly/milestones/photolibrary/videos/4years/language/4-years_tells-stories.mp4",
        "icon" : "../../assets/images/staricons/33.png",
        "video" : true,
        "id" : 33,
        "img" : "../../assets/images/milestone33.jpg",
        "name" : "Tells a story (age 4 milestone) while pretending to read",
        "notes" : "",
        "progress" : 0,
        
        
      },
      "Milestone34" : {
        "detail" : "Detail explanations here ",
        "icon" : "../../assets/images/staricons/34.png",
        "video" : false,
        "id" : 34,
        "img" : "../../assets/images/milestone34.jpg",
        "name" : "Shows independence (age 2 milestone) by trying to brush his own teeth",
        "notes" : "",
        "progress" : 0
      },
      "Milestone4" : {
        "detail" : "The little girl in the image puts her arm around the crying boy",
        "icon" : "../../assets/images/staricons/4.png",
        "video" : false,
        "id" : 4,
        "img" : "../../assets/images/milestone4.jpg",
        "name" : "Shows concern for a crying friend",
        "notes" : "",
        "progress" : 0
      },
      "Milestone5" : {
        "detail" : "Detail explanations here ",
        "icon" : "../../assets/images/staricons/5.png",
        "video" : false,
        "id" : 5,
        "img" : "../../assets/images/milestone5.jpg",
        "name" : "Understands the idea of 'mine' and 'his' or 'hers'",
        "notes" : "",
        "progress" : 0,
         "submilestone" : {
            "checkbox1" : {
                "name" : "'Mine'",
                "state" : "false"
            },
             "checkbox2" : {
                "name" : "His",
                "state" : "false"
            },
             "checkbox3" : {
                "name" : "Hers",
                "state" : "false"
            },
             "checkbox4" : {
                "name" : "Theirs",
                "state" : "false"
            }
        }
      },
      "Milestone6" : {
        "detail" : "The little girl is being 'loving' toward her friend",
        "video" : false,
        "icon" : "../../assets/images/staricons/6.png",
        "id" : 6,
        "img" : "../../assets/images/milestone6.jpg",
        "name" : "Shows a wide range of emotions",
        "notes" : "",
        "progress" : 0,
        "submilestone" : {
            "checkbox1" : {
                "name" : "Happy",
                "state" : false
            },
             "checkbox2" : {
                "name" : "Angry",
                "state" : false
            },
             "checkbox3" : {
                "name" : "Sad",
                "state" : false
            },
             "checkbox4" : {
                "name" : "Anxious",
                "state" : false
            }
        }
      },
      "Milestone7" : {
        "detail" : "The little boy in this picture is separating easily as he says goodbye to his dad",
        "video" : false,
        "icon" : "../../assets/images/staricons/7.png",
        "id" : 7,
        "img" : "../../assets/images/milestone7.jpg",
        "name" : "Separates easily  from mom and dad",
        "notes" : "",
        "progress" : 0
      },
      "Milestone8" : {
        "detail" : "",
        "video" : false,
        "icon" : "../../assets/images/staricons/8.png",
        "id" : 8,
        "img" : "../../assets/images/milestone8.jpg",
        "name" : "May get upset with major changes in routine",
        "notes" : "",
        "progress" : 0,
        "submilestone" : {
            "checkbox1" : {
                "name" : "Waking",
                "state" : false
            },
             "checkbox2" : {
                "name" : "Sleeping",
                "state" : false
            },
             "checkbox3" : {
                "name" : "Eating",
                "state" : false
            },
             "checkbox4" : {
                "name" : "Playing",
                "state" : false
            }
        }
      },
      "Milestone9" : {
        "detail" : "In this image, a little boy is putting on his shirt.",
        "video" : false,
        "icon" : "../../assets/images/staricons/9.png",
        "id" : 9,
        "img" : "../../assets/images/milestone9.jpg",
        "name" : "Dresses and undresses self ",
        "notes" : "",
        "progress" : 0,
        "submilestone" : {
            "checkbox1" : {
                "name" : "Tops",
                "state" : false
            },
             "checkbox2" : {
                "name" : "Bottoms",
                "state" : false
            },
             "checkbox3" : {
                "name" : "Socks",
                "state" : false
            },
             "checkbox4" : {
                "name" : "Shoes",
                "state" : false
            }
        }
      }
    };

    public userReport = 
    {
      "numAchieved" : 0,
      "numRecorded" : 0,
      "numPictures" : 0,
      "numNotes" : 0,
    };

    public userLogs =
    {
      
        "Login" : {
          "1" : 1,
         
        },
        "menuAction" : {
          "1" : 1,
          
        },
        "navigation" : {
         
           "1" : 1,
        },
        "openChecklist" : {
          "1" : 1,
          
        },
        "openDialog" : {
           "1" : 1,
        },
        "openSetting" : {
           "1" : 1,

        },
        "openStory" : {
          "1" : 1,
          
        },
        "recordProgress" : {
            "1" : 1,
         
        },
      
    };

    public account =  {
        "child" : {
          "age" : "",
          "gender" : "",
          "img" : "../../assets/images/defaultprofile.jpg",
          "name" : "",
          "type" : "child"
        },
        "parent" : {
          "email" : "",
          "img" : "../../assets/images/defaultprofile.jpg",
          "name" : "",
          "type" : "parent"
        }
      };


   userList: FirebaseListObservable<any>;
   LoginObject: FirebaseListObservable<any>;
   user: FirebaseListObservable<any[]>;
   // user: firebase.User;


   // public user: any;
   public userAccount: any;

   public email:string = "yiranma@gatech.edu";
   public password:string = "123456";
   public checklist:FirebaseListObservable<any[]>;
   public checklistflat :any;
   public key:any;
   public cred = firebase.auth.EmailAuthProvider.credential(
    this.email,
    this.password
   );



  login() {

    // this.af.signInWithPopup(new firebase.auth.GoogleAuthProvider());

    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(auth => {

      this.user = this.af.list('/userList', {
          query: {
            orderByChild: 'userID',
            equalTo: this.afAuth.auth.currentUser.uid
          }});

        this.user.subscribe(queriedItems => {
          this.userAccount = queriedItems.length;
          console.log("this user account: ", queriedItems.length);
         
          if (this.userAccount == 0 ) {
            this.addUser(this.afAuth.auth.currentUser);
          }
          else {
            this.key = queriedItems[0].$key;

            
          }
          
        });

      this.authService.login().subscribe(() => {
        this.updateUser(this.key);
        console.log("updateUser,", this.key);

        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '1/account';
        // let redirect = 'account';
        let navigationExtras: NavigationExtras = {
              preserveQueryParams: true,
              preserveFragment: true
            };
            // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      });
    });
  }



  login2() {

    // this.af.signInWithPopup(new firebase.auth.GoogleAuthProvider());

    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(auth => {

      this.user = this.af.list('/userList', {
          query: {
            orderByChild: 'userID',
            equalTo: this.afAuth.auth.currentUser.uid
          }});

        this.user.subscribe(queriedItems => {
          this.userAccount = queriedItems.length;
          console.log("this user account: ", queriedItems.length);
         
          if (this.userAccount == 0 ) {
            this.addUser(this.afAuth.auth.currentUser);
          }
          else {
            this.key = queriedItems[0].$key;

            
          }
          
        });

      this.authService.login().subscribe(() => {
        this.updateUser(this.key);
        console.log("updateUser,", this.key);

        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '1/account';
        // let redirect = 'account';
        let navigationExtras: NavigationExtras = {
              preserveQueryParams: true,
              preserveFragment: true
            };
            // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      });
    });
  }


/*list*/


  public addUser(auth:any) {

    this.userList.push({  
      userID: this.afAuth.auth.currentUser.uid, userProfile: this.afAuth.auth.currentUser.email, userPhoto: this.afAuth.auth.currentUser.photoURL, time: Date(), 
      Checklist:this.userChecklist, 
      userReport: this.userReport,
      userLogs: this.userLogs,
      account: this.account
    });
    console.log("user is pushed");

  }
  public updateUser(key) {

    this.LoginObject = this.af.list('/userList/'+this.key+'/userLogs'+'/Login');
    
    this.userList.update( key, { time: Date() });
    // let logObject = this.af.database.object('/userList/'+key+'/userLogs');
    
    // let object = this.af.database.object('/userList/'+key+'/userLogs'+'numLogins',{ preserveSnapshot: true });
    this.LoginObject.push({ time: Date()} );
         
  }
   

  logout() {
     this.afAuth.auth.signOut();
  }
  
  // public userID: string;




}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/