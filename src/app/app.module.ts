import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeadComponent } from './component/head/head.component';
import {RouterModule} from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HomeComponent } from './component/home/home.component';
import {routes} from './routes';
import {PublicGuard} from './guards/public.guard';
import {PrivateGuard} from './guards/private.guard';
import {AuthenticationService} from './services/authentication.service';
import {Ng2Webstorage} from 'ngx-webstorage';
import {MatInputModule,MatPaginatorModule,MatSortModule,MatMenuModule,MatIconModule,MatDialogModule} from '@angular/material';
import {TokenService} from './services/interceptors/token.service';
import { BookmarksComponent } from './component/bookmarks/bookmarks.component';
import {BookmarksService} from './services/bookmarks.service';
import {MatTableModule} from '@angular/material/table';
import { EditBookmarkComponent } from './component/edit-bookmark/edit-bookmark.component';




@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    BookmarksComponent,
    EditBookmarkComponent    

  ],
  entryComponents:[

    EditBookmarkComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot(routes),
    Ng2Webstorage,
    MatInputModule,

  ],
  providers: [PublicGuard,PrivateGuard,AuthenticationService,BookmarksService,{provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
