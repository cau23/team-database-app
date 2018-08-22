import { Injectable } from '@angular/core';
import { Team } from './team';
import { TEAMS } from './mock-teams';

@Injectable({
	providedIn: 'root',
})
export class TeamService {

	getTeams(): Team[] {
		return TEAMS;
	}

  constructor() { }

}
