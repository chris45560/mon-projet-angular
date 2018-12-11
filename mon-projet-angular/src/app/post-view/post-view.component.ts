import {Component, OnInit} from '@angular/core';
import {PostlistService} from '../services/postlist.service';

@Component({
    selector: 'app-post-view',
    templateUrl: './post-view.component.html',
    styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

    postsList: any[];

    constructor(
        private postlistService: PostlistService
    ) {
    }

    lastUpdate = new Date();

    ngOnInit() {
        this.postsList = this.postlistService.postsList;
    }

    onReset() {
        this.postlistService.resetLoveItsAll();
    }

}
