// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory=(num,mockUpStrand)=>{
  return{
    specimenNum:num,
    dna:mockUpStrand,
      mutate(){
     let randomDnaIndex=Math.floor(Math.random()*this.dna.length);
     let randomDna=this.dna[randomDnaIndex];
      // console.log(randomDna);
        let newDna='';
        do{
        newDna=returnRandBase();
        }while(randomDna===newDna);
        // console.log(randomDna);
        // console.log(newDna);
         this.dna[randomDnaIndex]=newDna;
        return this.dna;  
    },
    compareDNA(pAequorObj){
      let matches=0;
      for(let i=0;i<this.dna.length;i++){
      
        if(this.dna[i]===pAequorObj.dna[i]){
          matches+=1;
         
        }
        
      }
   
      let percentage=(matches/this.dna.length*100).toFixed(2);
      
      console.log(`specimen#${this.specimenNum} and specimen#${pAequorObj.specimenNum} have ${percentage}% DNA in common`);
      
      
    },
    willLikelySurive(){
      
      let CandGDna=0;
      
      for(let i=0;i<this.dna.length;i++){
        if(this.dna[i]==='C' || this.dna[i]==='G'){
        CandGDna++;
        }
       
      }
      
      let CandGPercentage=(CandGDna/this.dna.length*100).toFixed(2);

      
      if(CandGPercentage>=60 ){
        return true;
      }else{
        return false;
      }
      
      
    },
    complementStrand(){
     let complementDna=[];
      
      for(let i=0;i<this.dna.length;i++){
        if(this.dna[i]==='A'){
          complementDna[i]='T';
        }
        else if(this.dna[i]==='T'){
          complementDna[i]='A';
        }
        else if(this.dna[i]==='C'){
          complementDna[i]='G';
        }
        else if(this.dna[i]==='G'){
          complementDna[i]='C';
        }
      }
      return complementDna;
    },
    
  
   };
};

//creating instance of pAequorFactory
const obj1=pAequorFactory(2,mockUpStrand());
console.log(obj1);
// Dna after mutate
console.log("dna after mutate"+obj1.mutate());
// console.log(obj1);


//creating instance to compare them
const obj1=pAequorFactory(1,mockUpStrand());
const obj2=pAequorFactory(2,mockUpStrand());
console.log(obj1.dna);
console.log(obj2.dna)
//comparing obj1 and obj2
obj1.compareDNA(obj2);

//check weather obj1 can survive
console.log(obj1.willLikelySurive());


//step 7 
const pAequorObj=[];
for(let i=1;i<=30;i++)
  {
    let obj1=pAequorFactory(i,mockUpStrand());
    if(obj1.willLikelySurive()===true){
      pAequorObj.push(obj1.specimenNum,obj1.dna);
    }else{
      i--;
    }
  }
console.log(pAequorObj);

//To find complement of Dna.
const obj1=pAequorFactory(1,mockUpStrand());
console.log(obj1.dna);
console.log(obj1.complementStrand());