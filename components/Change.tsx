export interface Change {
  o: number;
  c: number;
}

export const Change = ({ o, c }: Change) => {
  var change = Math.round(100 * ((c - o) / o) * 100) / 100;
  return (
    <div className="flex flex-row w-full">
      <div className={`text-${change < 0 ? "red" : "green"} font-bold w-fit`}>
        {change}%
      </div>
    </div>
  );
};
