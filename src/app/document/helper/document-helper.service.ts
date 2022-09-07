import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class DocumentHelperService {

  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar) { }
  initDocumentForm(){
    return   this.fb.group({
        title: ['', Validators.required],
        documentNumber: ['', [Validators.required]],
        montant: ['', [Validators.required],],
      },

    );
  }
  initCommissionForm(){
    return   this.fb.group({
        name: ['', Validators.required],
        desc: ['', [Validators.required]],
        role: ['', [Validators.required],],
      },

    );
  }
  initJournalForm(){
    return   this.fb.group({
      journalName: ['', Validators.required],
      journalNumber: ['', Validators.required],
      journalDate: ['', [Validators.required]],
      journalPage: ['', [Validators.required],],
      },

    );
  }
  openSnackBarError(msg:string) {
    this._snackBar.open(msg, 'X', {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass:['error-snackbar']
    });
  }


}
