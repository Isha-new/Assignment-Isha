let ordinal_num = [1,2,3,4,5,6,7,8,9];
for(let i=0; i < ordinal_num.length; i++) {
if(i == 0){
    console.log(`${ordinal_num[i]}st`);
}else if (i == 1){
    console.log(`${ordinal_num[i]}nd`);
}else if (i == 2){
    console.log(`${ordinal_num[i]}rd`)
}else {
    console.log(`${ordinal_num[i]}th`)
}

}
