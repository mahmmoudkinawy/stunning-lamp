import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/models/team';
import { TeamService } from 'src/app/shared/services/team.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  allTeam: Team[];
  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.getAllTeam();
  }

  getAllTeam(){
    this.teamService.getAllTeam().subscribe((res: any) => {
      this.allTeam = res.data;
    });
  }
  getImgPath(fileName: any): any {
    return `${environment.file_path}${fileName}`;
  }
}
