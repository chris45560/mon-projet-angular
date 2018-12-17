import { Subject } from 'rxjs';

interface Post {
    id: number,
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;
}

export class PostlistService {

    postSubject = new Subject<any[]>();

    private postsList: Post[] = [
        {
            id: 1,
            title: '1er post',
            content: 'Description post 1',
            loveIts: 1,
            created_at: new Date()
        },
        {
            id: 2,
            title: '2ème post',
            content: 'Description post 2',
            loveIts: 1,
            created_at: new Date()
        },
        {
            id: 3,
            title: '3ème post',
            content: 'Description post 3',
            loveIts: -1,
            created_at: new Date()
        }
    ];

    emitPostSubject() {
        this.postSubject.next(this.postsList.slice());
    }

    getPostById(id: number) {
        const post = this.postsList.find(
            (postObject) => {
                return postObject.id === id;
            }
        );
        return post;
    }

    public resetLoveItsAll(): void {
        this.postsList.forEach((post: Post) => {
            // console.log(post.loveIts);
            post.loveIts = 0;
        });
        this.emitPostSubject();
    }

    public resetOne(index: number): void {
        this.postsList[index].loveIts = 0;
        this.emitPostSubject();
    }

    public loveItsOne(index: number): void {
        this.postsList[index].loveIts++;
        this.emitPostSubject();
    }

    public dontLoveItsOne(index: number): void {
        this.postsList[index].loveIts--;
        this.emitPostSubject();
    }

}
