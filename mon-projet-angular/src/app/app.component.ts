import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
// import 'rxjs/add/observable/interval';
import {interval} from 'rxjs';
// import {PostlistService} from './services/postlist.service';
// import {Post} from './post';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

    secondes: number;
    counterSubscription: Subscription;

    constructor() {
    }

    ngOnInit() {
        const counter = interval(1000);
        this.counterSubscription = counter.subscribe(
            (value: number) => {
                this.secondes = value;
            }
        );
        /*
        counter.subscribe(
            (value: number) => {
                this.secondes = value;
            },
            (error: Error) => {
                console.log(error.message);
            },
            () => {
                console.log('Observable complétée !');
            }
        );
    */
    }
    ngOnDestroy() {
        this.counterSubscription.unsubscribe(); // Evite tous les problèmes de comportement infini
    }
}
