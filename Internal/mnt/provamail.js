var hash = function(){
  var cod = Math.floor((Math.random() * 10000));
  if (cod<1000){cod +=5000;}
  return cod
};





for (i = 0; i < 20; i++) {
  console.log(hash());
}
