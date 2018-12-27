import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

// import {post} from 'selenium-webdriver/http';

interface Post {
    id: number;
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;
    publish: string;
}

@Injectable()
export class PostlistService {

    postSubject = new Subject<any[]>();

    private postsList: Post[] = [];

    constructor(private httpClient: HttpClient) {
    }

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

    public publishOne(index: number): void {
        this.postsList[index].publish = 'oui';
        this.emitPostSubject();
    }

    public unpublishOne(index: number): void {
        this.postsList[index].publish = 'non';
        this.emitPostSubject();
    }

    public deleteOne(index: number): void {
        this.postsList.splice(index, 1);
        this.savePostsToServer();
        this.emitPostSubject();
    }

    addPost(name: string, content: string, publish: string, date: Date) {
        const postObject = {
            id: 0,
            title: '',
            content: 'Lorem ipsum dolor sit amet',
            loveIts: 0,
            created_at: date,
            publish: ''
        };
        postObject.title = name;
        postObject.content = content;
        postObject.publish = publish;
        postObject.id = this.postsList[(this.postsList.length - 1)].id + 1;

        this.postsList.push(postObject);
        this.emitPostSubject();
    }

    savePostsToServer() {
        this.httpClient
            .put('https://http-client-demo-45560.firebaseio.com/posts.json', this.postsList)
            .subscribe(
                () => {
                    console.log('Enregistrement terminé !');
                },
                (error) => {
                    console.log('Erreur de sauvegarde !' + error);
                }
            );
    }

    getPostsFromServer() {
        this.httpClient
            .get<any[]>('https://http-client-demo-45560.firebaseio.com/posts.json')
            .subscribe(
                (response) => {
                    this.postsList = response;
                    this.emitPostSubject();
                },
                (error) => {
                    console.log('Erreur de chargement !' + error);
                }
            );
    }
}
