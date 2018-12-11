import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-postlist',
    templateUrl: './postlist.component.html',
    styleUrls: ['./postlist.component.scss']
})
export class PostListComponent implements OnInit {

    @Input() postsList: string[];

    constructor() {
    }

    ngOnInit() {
    }

}
