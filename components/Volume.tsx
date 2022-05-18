export interface Volume {
    v: number;
  }
  
  export const Volume = ({ v }: Volume) => {
      var volume = Math.round(v / 1000000)
    return (
        <div className="">Volume: <b>{volume}M</b></div>
    );
  };
  