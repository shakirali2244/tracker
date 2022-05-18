export interface ChangeV {
    o: number;
    c: number;
  }
  
  export const ChangeV = ({ o,c }: ChangeV) => {
    var change = Math.round((c - o)*100)/100;
    return (
      <div className="felx flex-row w-full">
        <div className={`text-${change < 0 ? "red" : "green"} w-fit`}><b> {change}$</b></div></div>
      
    );
  };
  