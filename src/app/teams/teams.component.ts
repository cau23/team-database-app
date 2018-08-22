import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

	teams = Team[];

	selectedTeam: Team;

	onSelect(team: Team): void {
		this.selectedTeam = team;
	}

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  getTeams(): void {
    this.teams = this.teamService.getTeams();
  }
}
