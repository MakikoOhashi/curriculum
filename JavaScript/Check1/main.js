//問１

let numbers=[2,5,12,13,15,18,22];

function isEven(){
let numList=[]
for(let i=0;i<=numbers.length;i++){
    if(numbers[i]%2===0){
        numList.push(numbers[i]);
    console.log(numbers[i]+'は偶数です');
    }
    
}
}
isEven();


//問２

class Car{
    constructor(gasoline,number){
        this.gasoline=gasoline;
        this.number=number;
    }
    getNumGas(){
        console.log(`ガソリンは${this.gasoline}です。ナンバーは${this.number}です。`)
}
}
let Ohashi=new Car(500,123);
Ohashi.getNumGas();
