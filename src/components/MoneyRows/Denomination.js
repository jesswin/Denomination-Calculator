import MoneyRow from "./MoneyRow";

const DENOMINATION = [1, 2, 5, 10, 20, 50, 100, 200, 500, 2000];
const Denomation = () => {
  return DENOMINATION.map((denomation) => {
    return <MoneyRow key={denomation} denomination={denomation} />;
  });
};
export default Denomation;
