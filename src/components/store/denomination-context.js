import React from "react";

const DenominationContext = React.createContext({
  piecesCount: 0,
  totalNotes: {},
  getPieces: () => {},
});
export default DenominationContext;
