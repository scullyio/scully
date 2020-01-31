import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {pluck, shareReplay, switchMap, catchError, tap, filter, map} from 'rxjs/operators';
import {Post} from '../posts/posts.component';
import {isScullyGenerated, TransferStateService} from '@scullyio/ng-lib-v8';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  postId$: Observable<number> = this.route.params.pipe(
    pluck('post'),
    filter(val => ![undefined, null].includes(val)),
    map(val => parseInt(val, 10)),
    shareReplay(1)
  );

  apiPosts$ = this.postId$.pipe(
    switchMap(id =>
      this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
        catchError(() =>
          of({
            id,
            title: 'not found',
          } as Post)
        )
      )
    ),
    shareReplay(1)
  );

  // This is an example of using TransferState
  post$ = isScullyGenerated()
    ? this.transferState.getState<Post>('post')
    : this.apiPosts$.pipe(tap(post => this.transferState.setState('post', post)));

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private transferState: TransferStateService
  ) {
    console.log('post inits');
  }

  ngOnInit() {}
}
