import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-postlistitem',
    templateUrl: './postlistitem.component.html',
    styleUrls: ['./postlistitem.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input() PostListItemTitle: string;
    @Input() PostListItemContent: string;
    @Input() PostListItemLoveIts: number;
    @Input() PostListItemCreated_at;

    constructor() {
    }

    ngOnInit() {
    }

    getTitle() {
        return this.PostListItemTitle;
    }

    getContent() {
        return this.PostListItemContent;
    }

    getLoveIts() {
        return this.PostListItemLoveIts;
    }

    getCreated_at() {
        return this.PostListItemCreated_at;
    }

    getColor() {
        if (this.PostListItemLoveIts > 0) {
            return 'green';
        } else if (this.PostListItemLoveIts < 0) {
            return 'red';
        }
    }

    onLoveIts() {
        this.PostListItemLoveIts++;
    }

    onDontLoveIts() {
        this.PostListItemLoveIts--;
    }

}
