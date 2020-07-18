const fs = require('fs')


const getNotes = () =>{


    return "You notes are ready"
}



const addNote = function(title,body){

    const notes = loadNotes()

    const duplicateNotes =notes.filter((note)=>{

           return note.title === title

    })

    if(duplicateNotes.length === 0){

        notes.push({
            title:title,
            body:body
        })


        saveNotes(notes)

        console.log('New note added')
    }else{


        console.log('Note title token!')
    }
    
}


const saveNotes = function(notes){

    const dataJSON =JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)


}

const loadNotes = function(){
    try{


        const dataBuffer = fs.readFileSync('notes.json')

    const dataJSON= dataBuffer.toString()

    return JSON.parse(dataJSON)

    }
    catch(e){

      return []
    }
    

}


const removeNote = function(title){



    //console.log(title+" Note is removed!")


    let notes = loadNotes()
    
    const note = notes.filter((note)=>{


        return note.title != title;
    })


    const note1 = notes.filter((note)=>{


        return note.title == title;
    })

     
    if(note1.length == 0){
     
          console.log("Not found and not removed")
    }

    if(note.length >0 && note1.length == 1 ){

        console.log("found and removed")
        saveNotes(note); 
    }
     
     //delete notes[count];
     
     

     //saveNotes(notes);
}





module.exports= {

    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote

};