import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppareilComponent} from './appareil/appareil.component';
import {PostListComponent} from './postlist/postlist.component';
import {PostListItemComponent} from './postlistitem/postlistitem.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {PostlistService} from './services/postlist.service';
import {AuthComponent} from './auth/auth.component';
import {PostViewComponent} from './post-view/post-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import {SinglePostComponent} from './single-post/single-post.component';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {AuthGuard} from './services/auth-guard.service';
import {EditPostComponent} from './edit-post/edit-post.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserService} from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
    {path: 'posts', canActivate: [AuthGuard], component: PostViewComponent},
    {path: 'posts/:id', canActivate: [AuthGuard], component: SinglePostComponent},
    {path: 'edit', canActivate: [AuthGuard], component: EditPostComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'users', component: UserListComponent},
    {path: 'new-user', component: NewUserComponent},
    {path: '', component: PostViewComponent},
    {path: 'not-found', component: FourOhFourComponent},
    {path: '**', redirectTo: '/not-found'}
];

@NgModule({
    declarations: [
        AppComponent,
        AppareilComponent,
        PostListComponent,
        PostListItemComponent,
        AuthComponent,
        PostViewComponent,
        SinglePostComponent,
        FourOhFourComponent,
        EditPostComponent,
        UserListComponent,
        NewUserComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        PostlistService,
        AuthService,
        AuthGuard,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
