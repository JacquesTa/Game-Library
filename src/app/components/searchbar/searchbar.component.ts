import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.router.navigate(['home', form.value.search]);
  }
}
