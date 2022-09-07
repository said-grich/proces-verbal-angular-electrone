export interface Offer {
  name:                string;
  address:             string;
  isOnline:            boolean;
  isRejectedBeforeMaj: boolean;
  isRejectedAfterMaj:  boolean;
  motifAfterMaj:       string;
  motifBeforeMaj?:     string;
  isWithReserve:       number;
  majoration:          number;
  montant:             number;
  reserve?:            string;
}
