import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';
import { Observable, of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  pluck,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs/operators';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  userId$: Observable<number> = this.route.params.pipe(
    pluck('userId'),
    filter((val) => ![undefined, null].includes(val)),
    map((val) => parseInt(val, 10)),
    shareReplay(1)
  );

  apiPosts$ = this.userId$.pipe(
    switchMap((id) =>
      this.http.get<Post[]>(`/api/posts?userId=${id}`).pipe(
        catchError(() =>
          of([{
            id,
            title: 'not found',
          }] as Post[])
        )
      )
    ),
    shareReplay(1)
  );

  // This is an example of using TransferState
  posts$:Observable<Post[]> = isScullyGenerated()
    ? this.transferState.getState('posts')
    : this.apiPosts$.pipe(
        tap((posts) => this.transferState.setState('posts', posts))
      );

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private transferState: TransferStateService
  ) {}

  ngOnInit() {}
}
