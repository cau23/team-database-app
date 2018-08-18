import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

	team: Team = {
		id: 1,
	 	name: 'Cardinals'
	};

  constructor() { }

  ngOnInit() {
  }

}
