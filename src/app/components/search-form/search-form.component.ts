import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  public query: string = null;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.query = this.route.snapshot.paramMap.get('query');
  }

  onEnter(value: string) {
    console.log({ value });
    this.router.navigate(['/search', value]);
  }

}
