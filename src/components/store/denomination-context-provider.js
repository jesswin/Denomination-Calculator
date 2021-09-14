import { useState } from "react";
import DenominationContext from "./denomination-context";

const DenominationContextProvider = (props) => {
  const [total, setTotal] = useState(0);
  const [pieces, setPieces] = useState({});
  const setMoney = (denomination, amount) => {
    if (denomination === 0 && amount === 0) {
      setTotal(0);
      setPieces({});
      return;
    }
    let total2 = 0;
    let copyPieces = { ...pieces };
    copyPieces = {
      ...pieces,
      [denomination]: amount,
    };
    for (let key in copyPieces) {
      total2 += key * copyPieces[key];
    }
    setPieces(copyPieces);
    setTotal(total2);
  };
  return (
    <DenominationContext.Provider
      value={{
        piecesCount: total,
        getPieces: setMoney,
        totalNotes: pieces,
      }}
    >
      {props.children}
    </DenominationContext.Provider>
  );
};
export default DenominationContextProvider;
