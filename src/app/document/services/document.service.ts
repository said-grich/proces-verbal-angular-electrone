import { Injectable } from '@angular/core';
import {Seance} from "../models/seance.model";
import {CommissionMember} from "../models/commission.model";
import Utils from "../helper/utile";
import {Journal} from "../models/journal.model";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private _isHaseCommissionPart :boolean = false;
  private _isHaseJournalPart :boolean = false;
  private _seanceList: Array<Seance> ;
  private _commissionMember: Array<CommissionMember>;
  private _journals: Array<Journal>;
  constructor() {

    this.commissionMember=Utils.FIXE_MEMBER;
  }


  get isHaseJournalPart(): boolean {
    return this._isHaseJournalPart;
  }

  set isHaseJournalPart(value: boolean) {
    this._isHaseJournalPart = value;
  }

  get isHaseCommissionPart(): boolean {
    return this._isHaseCommissionPart;
  }

  set isHaseCommissionPart(value: boolean) {
    this._isHaseCommissionPart = value;
  }


  get seanceList(): Array<Seance> {
    if (this._seanceList==null){
      this._seanceList=new Array<Seance>();
    }
    return this._seanceList;
  }

  set seanceList(value: Array<Seance>) {
    this._seanceList = value;
  }

  get commissionMember(): Array<CommissionMember>  {
    if(this._commissionMember==null){
      this._commissionMember=new Array<CommissionMember>();
    }
    return this._commissionMember;
  }

  set commissionMember(value: Array<CommissionMember> ) {
    this._commissionMember = value;
  }


  get journals(): Array<Journal> {
    if(this._journals==null){
      this._journals=new Array<Journal>();
    }
    return this._journals;
  }

  set journals(value: Array<Journal>) {
    this._journals = value;
  }

  createNewDoc(){
    console.log(this.commissionMember);
    console.log(this.journals);
  }
}
