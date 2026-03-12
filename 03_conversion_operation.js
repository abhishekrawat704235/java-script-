const a="10bac"//NaN
const b=null//0 
const c=undefined//NaN
const d=true//1
const e=false//0
const f="20"//20
const g=""//0
const h=" " //0
const i=[]//0
const j=[1,2]//NaN
const k={} //NaN
const l=function(){}//NaN
 let value =Number(a,b,c,d,e,f,g,h,i,j,k,l);
 for (let key in value){
    console.log(key ,"=>", typeof value[key]);
 }