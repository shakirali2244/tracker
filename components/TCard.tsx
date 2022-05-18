import { Change } from "./Change";
import { ChangeV } from "./ChangeV";
import { Volume } from "./Volume";

export interface Ticker {
  T: string;
  v: number;
  vw: number;
  o: number;
  c: number;
  h: number;
  l: number;
  t: number;
  n: number;
}

export interface Obj {
  obj: Ticker;
}
export const TCard = ({ obj }: Obj) => {
  return (
    <div className="card w-full bg-green-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{obj.T}({obj.c})</h2>
        
        <div className="flex flex-row w-full">
          
          <Change o={obj.o} c={obj.c}></Change>
          <ChangeV o={obj.o} c={obj.c}></ChangeV>
        </div>
        <Volume v={obj.v}></Volume>

      </div>
    </div>
  );  
};
