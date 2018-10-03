import { Component, OnInit } from '@angular/core';
import {Observable, timer} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-pooling',
  templateUrl: './pooling.component.html',
  styleUrls: ['./pooling.component.css']
})
export class PoolingComponent implements OnInit {

  $poolingResponseValue: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const startAfter = 1000;
    const every = 1000;
    this.$poolingResponseValue = timer(startAfter, every).pipe(
      switchMap(() => this.http.get(`https://jsonplaceholder.typicode.com/todos/${Math.round(Math.random() * 100)}`))
    );
  }

}
