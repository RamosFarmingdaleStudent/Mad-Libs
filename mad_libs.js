function wordBlanks(myNoun, myAdj, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdj + " " + myNoun + " " + myVerb + " to the nest " + myAdverb;

    return result;
}

console.log(wordBlanks("bird", "small", "flyed", "slowly"));