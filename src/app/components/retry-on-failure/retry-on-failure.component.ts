import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-retry-on-failure',
  templateUrl: './retry-on-failure.component.html',
  styleUrls: ['./retry-on-failure.component.css']
})
export class RetryOnFailureComponent implements OnInit {

  $httpResponseValue:  Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  makeHttpRequest(): void {
    const nonExisitingUrl = 'http://localhost/nonexist';
    const numberOfTries = 2;
    this.$httpResponseValue = this.http.get(nonExisitingUrl).pipe(
      retry(numberOfTries),
      catchError(error => of(error)),
    );
  }

}
