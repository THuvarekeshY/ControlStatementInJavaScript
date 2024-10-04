let a=[4,5,0,1,9,0,5,0]
let b=[]
for(let i=0;i<a.length;i++){
    if(a[i]!==0){
        b.push(a[i])
    }
}
for(let i=b.length;i<a.length;i++){
    b.push(0)
}
console.log(b);
