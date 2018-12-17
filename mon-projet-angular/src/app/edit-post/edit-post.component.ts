import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {PostlistService} from '../services/postlist.service';

@Component({
    selector: 'app-edit-post',
    templateUrl: './edit-post.component.html',
    styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

    defaultPublish = 'non';

    constructor(private postlistService: PostlistService,
                private router: Router) { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        const name = form.value['name'];
        const publish = form.value['publish'];
        const date = new Date();
        this.postlistService.addPost(name, publish, date);
        this.router.navigate(['/posts']);
    }
}
