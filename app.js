const express = require("express");                                               //richiedo il modulo express
const bodyParser = require ("body-parser");                                       // richiedo il bodyparser
const date = require(__dirname+"/date.js");                                      // richiedo il modulo che io stesso ho creato
var items=["comprare il cibo","cucinare il cibo","mangiare il cibo"];
let workItems=[];
const app= express();                                                            // passo express ad una variabile per poterlo usare
app.set("view engine","ejs");                                                    // necessario per usare EJS

app.use(bodyParser.urlencoded({extended: true}));                               // Necessario per usare il body parser
app.use(express.static("public"));                                              // indico ad EJS dove trovare i file statici come il css




app.get("/", function(req, res){                                                // faccio una richiesta GEt alla Root per ottenere delle info mostrate sulla pagina
let day = date.getDay();                                                         // se meddo il getDate cambio risultato (modulo date.js)
res.render("list", {listTitle:  day, newListItems: items } );                   // effettuo il rendering perchè sto passando + info alla mia pagina EJS
});


app.post("/", function(req,res){
    var item = req.body.newItem;                                                 // effettuo il parser dell oggetto newItem (proprietà name della pagina EJS dentro l' input type)
  if(req.body.list ==="Work"){                                                  // eseguo il post per passare le informazioni dalla mia pagina EJS (root) al mio server.
  workItems.push(item);
  res.redirect("/work");
}else{
  items.push(item);
  res.redirect("/");
}
});



app.get("/work",function(req,res){
  res.render("list", {listTitle:"Work List", newListItems: workItems});
});

app.post("/work", function(req,res){
  let item= req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.get("/about", function(req,res){
res.render("about");

});

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
