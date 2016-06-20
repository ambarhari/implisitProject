/**
 * Created by hariambari on 6/21/16.
 */


export interface dataItem{
  label:string;
  tipe:string;
  isidata:string[];
}

export interface item{
  data1: dataItem;
  data2: dataItem;
}

export interface paket{
  item1: item;
  item2: item;
}

export class paketdata{
  private paket = {
    item1: {
      data1 : {
        label: "1",
        tipe:'kata',
        isidata: ["data1.kata2", "data1.kata2", "data1.kata3","data1.kata4","data1.kata5"],
      },
      data2:{
        label: "2",
        tipe:'kata',
        isidata: ["data2.kata2", "data2.kata2", "data2.kata3","data2.kata4","data2.kata5"],
      }

    },
    item2: {
      data1:{
        label: "A",
        tipe: 'kata',
        isidata: ["data1.kata2", "data1.kata2", "data1.kata3","data1.kata4","data1.kata5"],
      },
      data2: {
        label: "B",
        tipe: 'kata',
        isidata: ["data2.kata2", "data2.kata2", "data2.kata3","data2.kata4","data2.kata5"]
      }
    },
  };

  getpaket(){
    return this.paket;
  }

  updatepaket(obj:paket){
    this.paket = obj;
  }
}



