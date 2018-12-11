import {Component, Input, OnInit} from '@angular/core';
import {PostlistService} from '../services/postlist.service';

@Component({
    selector: 'app-postlistitem',
    templateUrl: './postlistitem.component.html',
    styleUrls: ['./postlistitem.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input() private postListItemTitle: string;
    @Input() private postListItemContent: string;
    @Input() private postListItemLoveIts: number;
    @Input() private postListItemCreated_at: Date;
    @Input() private indexOfPost: number;
    @Input() private id: number;

    constructor(private postlistService: PostlistService) {
    }

    ngOnInit() {
    }

    getTitle(): string{
        return this.postListItemTitle;
    }

    getContent() {
        return this.postListItemContent;
    }

    getLoveIts() {
        return this.postListItemLoveIts;
    }

    getCreated_at() {
        return this.postListItemCreated_at;
    }

    getColor() {
        if (this.postListItemLoveIts > 0) {
            return 'green';
        } else if (this.postListItemLoveIts < 0) {
            return 'red';
        }
    }

    onReset() {
        this.postlistService.resetOne(this.indexOfPost);
    }

    onLoveIts() {
        this.postlistService.loveItsOne(this.indexOfPost);
    }

    onDontLoveIts() {
        this.postlistService.dontLoveItsOne(this.indexOfPost);
    }

}
