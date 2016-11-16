import { Component, OnInit }    from '@angular/core';

@Component ({

	template:`


<div style = "padding: 20px 20px">



	 <md-card class="app-input-section">
	 Child's
	 <br/>
      <md-input style = "padding: 20px 0 0 0" placeholder="Name"></md-input>
      <br/>
  
      <md-input style = "padding: 20px 0 0 0 " placeholder="Gender"></md-input>
          <br/>
      
      <md-input style = "padding: 20px 0 0 0"placeholder="Age"></md-input>
          <br/>
   

    </md-card>
    </div>
<div style = "padding: 20px 20px">

     <md-card  class="app-input-section">
     Parent's
     <br/>
     <md-input style = "padding: 20px 0 0 0" placeholder="Email"></md-input>
      <br/>
  
      <md-input style = "padding: 20px 0 0 0" placeholder="Name"></md-input>
          <br/>

    </md-card>

</div>

	`,
	styles: [
	`
	cardstyle {

		margin: 10px 10px;
		padding: 10px 10px;
	}

	`]

})

export class SettingComponent{

}