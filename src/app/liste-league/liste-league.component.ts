import { AuthService } from './../services/auth.service';
import { EquipeService } from './../services/equipe.service';
import { League } from './../model/league.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-league',
  templateUrl: './liste-league.component.html',
  styles: [
  ]
})
export class ListeLeagueComponent implements OnInit {
  ajout:boolean=true;

  league!:League[];
  updatedleague:League = {"id":0,"nom":""};


  constructor(private equipeservices:EquipeService,
    public AuthService : AuthService) { }
   

  ngOnInit(): void {
    this.league=this.equipeservices.listerLeague();
    
  }
  leagueupdated(league:League){
   // this.updatedleague=league;
   this.equipeservices.ajouterleague(league);
   
   console.log("updated league",league);
  }
  updateleg(l : League){
    this.updatedleague=l;
   
    this.ajout=false;
  }
 

}
