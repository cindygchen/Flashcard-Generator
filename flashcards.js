var BasicCard = require("./BasicCard.js");
var ClozeCard= require("./ClozeCard.js");

var firstPres = new BasicCard("Who was first?", "GW");
console.log(firstPres.front + " " + firstPres.back);

var onePres = new ClozeCard("GW was first pres", "GW");
console.log(onePres.fullText + " " + onePres.partial + " " + onePres.cloze);
