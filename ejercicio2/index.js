let wordArray = [
  ["F", "A", "C", "I"],
  ["O", "B", "Q", "P"],
  ["A", "N", "O", "B"],
  ["M", "A", "S", "S"]
];

const CheckWordInArray = (wordArray, word) => {

    let existsWord = false;

    let maxIndex = wordArray.length;

    for(var i = 0; i < maxIndex; i++){
        let wordRow= "";
        let wordColumn = "";

        let internalIndex =  maxIndex < wordArray[i].length ? wordArray[i].length : maxIndex;
        for(let j = 0; j < internalIndex; j++){
            if(j < wordArray[i].length){
                wordRow += wordArray[i][j];
                wordColumn += wordArray[j][i];
            }
        }
        
        if(wordRow.toUpperCase() === word.toUpperCase() || wordColumn.toUpperCase() === word.toUpperCase()){
            existsWord = true;
        }
    }

    return existsWord;

}

console.log(CheckWordInArray(wordArray, "foam"));


