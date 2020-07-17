const fs = require('fs')

const book  = {

  title: 'Ego is the Enemy',
  author:'Ryan Holiday'
      
}

// gives us json string back to an object
const bookJSON = JSON.stringify(book);

const bookObject = JSON.parse(bookJSON);




//console.log(bookJSON)
//console.log(bookObject)

fs.writeFileSync('BookInfo.json',bookJSON)



// it shows the binary code but to get the actually string we use toString()
const dataBuffer = fs.readFileSync('./BookInfo.json')

//console.log(dataBuffer.toString())

const dataToString = dataBuffer.toString();

//console.log(dataToString)


const toObject =JSON.parse(dataToString);

console.log(toObject)

toObject.title = "Cheater"
toObject.author = "Sumaya"


const dataToString2 =JSON.stringify(toObject)

fs.writeFileSync('BookInfo.json',dataToString2)








