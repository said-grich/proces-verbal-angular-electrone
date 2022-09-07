import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { DocumentComponent } from './document/document.component';
import { CreateDocumentComponent } from './document/containers/create-document/create-document.component';
import { ListOfDocumentsComponent } from './document/containers/list-of-documents/list-of-documents.component';
import {StoreModule} from "@ngrx/store";
import { AddSeanceModalComponent } from './document/components/add-seance-modal/add-seance-modal.component';
import {ModalModule} from "angular-bootstrap-md";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SenceListComponent } from './document/components/sence-list/sence-list.component';
import { CommissionPartComponent } from './document/components/commission-part/commission-part.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { JournalPartComponent } from './document/components/journal-part/journal-part.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    CreateDocumentComponent,
    ListOfDocumentsComponent,
    AddSeanceModalComponent,
    SenceListComponent,
    CommissionPartComponent,
    JournalPartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule

  ],
  providers: [],
  entryComponents:[AddSeanceModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
