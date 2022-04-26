

exports.getDate=function(){

let today= new Date();

let options = {                                                                 // creo quest' oggetto perchè uso il metodo tolocalestringdate per ottenere la data locale
  settGiorno: "long",
  anno: "numeric",
  mese: "long",
  giorno: "numeric"
};

  return today.toLocaleDateString("it-IT", options);

};


exports.getDay= function(){
  let today= new Date();
  var gds =["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"];

  return  gds[today.getDay()];

};
