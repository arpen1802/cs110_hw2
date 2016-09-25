const stars= function(a){
  if(a===0){
    return "";
}
else{
  return "*" + stars(a-1);
}
};

const space = function (b){
if(b===0){
  return "";
}
else{
  return " " + space(b-1);
}
};
const printStars= function(k, spacecount, starcount){
if(k===0){
  return "";
}
else{
  console.log(space(spacecount)+ stars(starcount));
  printStars(k-1, spacecount-1, starcount+2);
}
};
const triangleStars= function(f){
 printStars(f, f-1,1);
};
triangleStars(5)
