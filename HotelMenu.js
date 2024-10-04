let a=prompt("Enter number of Pizza-200/-")
let b=prompt("Enter number of Burger-300/-")
let c=prompt("Enter number of Chicken Biriyani-250/-")
let d=prompt("Enter number of Apple Juice-100/-")
let e=prompt("Enter number of Idli-80/-")
const pizza=200
const burger=300
const ChiBir=250
const AppJui=100
const Idli=80
console.table([{"Food":"Pizza","Price":200},{"Food":"Burger","Price":300},{"Food":"Chicken Biriyani","Price":250},{"Food":"Apple Juice","Price":100},{"Food":"Idli","Price":80}])
let f=((a*200)+(b*300)+(c*250)+(d*100)+(e*80));
if(f>500){
    f=f*0.9
}
console.log(f);


