import {Component, OnInit} from '@angular/core';
import {PostlistService} from '../services/postlist.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-single-post',
    templateUrl: './single-post.component.html',
    styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

    title: string = 'Post';
    content: string = 'Contenu';

    constructor(private postlistService: PostlistService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.title = this.postlistService.getPostById(+id).title;
        this.content = this.postlistService.getPostById(+id).content;
    }

}
