var ClozeCard = function(text, cloze) {
	this.partial = text.replace(cloze, "...");
	this.fullText = text;
	this.cloze = cloze;
};

module.exports = ClozeCard;