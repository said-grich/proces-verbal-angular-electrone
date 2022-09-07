import { Component, OnInit } from '@angular/core';
import {DocumentService} from "../../services/document.service";

@Component({
  selector: 'app-add-seance-modal',
  templateUrl: './add-seance-modal.component.html',
  styleUrls: ['./add-seance-modal.component.css']
})
export class AddSeanceModalComponent implements OnInit {
  public isHasCommissionPart:any;
  public isHasJournalPart:any;
  constructor(private documentService:DocumentService, ) { }

  ngOnInit(): void {
  }
  getIsHasCommissionPart(){
    return this.documentService.isHaseCommissionPart;
  }
  setIsHasCommissionPart(){
    return this.documentService.isHaseCommissionPart=this.isHasCommissionPart;
  }
  getIsHasJournalPart(){
    return this.documentService.isHaseJournalPart;
  }
  setIsHasJournalPart(){
    return this.documentService.isHaseJournalPart=this.isHasJournalPart;
  }


  onSubmit(){
    this.documentService.createNewDoc();
  }

}
