import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { APIResponse } from 'src/app/models/APIResponse.model';
import { Game } from 'src/app/models/Game.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public sort!: string;
  games!: Game[];

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacrit');
      }
    });
  }

  onSubmit(form: NgForm) {
    this.router.navigate(['home', form.value.search]);
  }

  searchGames(sort: string, search?: string) {
    console.log('sort', sort);
    console.log('search', search);

    this.httpService
      .getGameList(sort, search)
      .subscribe((gameList: APIResponse) => {
        this.games = gameList.results;
        console.log(gameList);
      });
  }
}
