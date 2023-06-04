import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse } from 'src/app/models/APIResponse.model';
import { Game } from 'src/app/models/Game.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort!: string;
  public games!: Game[];
  private routeSub?: Subscription;
  private gameSub?: Subscription;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
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

    this.gameSub = this.httpService
      .getGameList(sort, search)
      .subscribe((gameList: APIResponse) => {
        this.games = gameList.results;
        console.log(this.games);
      });
  }

  onGameDetail(id: string) {
    this.router.navigate(['details', id]);
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe;
    }
    if (this.gameSub) {
      this.gameSub.unsubscribe;
    }
  }
}
