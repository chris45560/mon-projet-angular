import {Component, OnInit} from '@angular/core';
import {PostlistService} from '../services/postlist.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-post-view',
    templateUrl: './post-view.component.html',
    styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

    postsList: any[];
    postSubscription: Subscription;

    constructor(
        private postlistService: PostlistService
    ) {
    }

    lastUpdate = new Date();

    ngOnInit() {
        // this.postsList = this.postlistService.postsList;
        this.postSubscription = this.postlistService.postSubject.subscribe(
            (postsList: any[]) => {
                this.postsList = postsList;
            }
        );
        this.postlistService.emitPostSubject();
    }

    onReset() {
        this.postlistService.resetLoveItsAll();
    }

}
