import {CommissionMember} from "./commission.model";
import {Journal} from "./journal.model";
import {Offer} from "./offer.model";

export interface Seance {
  dateDelai:                    string;
  hourDelai:                    string;
  dateSuspend:                  string;
  hourSuspend:                  string;
  dateFaitLe:                   string;
  isHasJournal?:                number;
  isHasOfferSecond?:            number;
  isHasOfferFirst?:             number;
  isHasCommission?:             number;
  seanceTitle:                  number;
  objet:                        string;
  decisionNumber:               string;
  decisionDate?:                string;
  dateOfCommission?:            string;
  dateOfPortail?:               string;
  hourOfPortail?:               string;
  commissionMember?:     CommissionMember[];
  commissionMemberFinal: CommissionMember[];
  journalDtoList?:              Journal[];
  offerDtoList?:                Offer[];
  isHasReception?:              number;
  letterNumber?:                string;
  letterDate?:                  string;
  dateOfReception?:             string;
  hourOfReception?:             string;
  offerWinner?:                 Offer;
}
