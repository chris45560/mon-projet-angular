import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    lastUpdate = new Date();

    PostsList = [
        {
            title: '1er post',
            content: 'Description post 1',
            loveIts: 0,
            created_at: new Date()
        },
        {
            title: '2ème post',
            content: 'Description post 2',
            loveIts: 0,
            created_at: new Date()
        },
        {
            title: '3ème post',
            content: 'Description post 3',
            loveIts: 0,
            created_at: new Date()
        }
    ];
}
