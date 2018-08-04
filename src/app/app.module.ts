import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NoteEditComponent } from './note-edit/note-edit.component';

const appRoutes: Routes = [
  { path: 'notes', component: NoteListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'note/:id', component: NoteEditComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    HomeComponent,
    NoteEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes//,
      // { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
