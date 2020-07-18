const validator = require('validator');
const yargs = require('yargs');
const notes = require('./notes-app/notes')


yargs.command({
    
    command: 'add',
    describe:'Add a new note',
    builder:{

         title:{

            describe:"title of the book",
            demandOption:true,
            type: 'string'
         },
         body:{

            describe:"body of the book",
            demandOption:true,
            type: 'string'
         }


    },
    handler: function(argv){

       notes.addNote(argv.title,argv.body);
    } 
});


yargs.command({
    
    command: 'remove',
    describe:'Remove a new note',
    builder:{

       title:{

            describe:"title of the book",
            demandOption:true,
            type: 'string'

       }

    },
    handler: function(argv){

       notes.removeNote(argv.title);
    } 
});


yargs.command({
    
    command: 'read',
    describe:'Read a new note',
    handler: function(){

       console.log("Hello this is reading a notes");
    } 
});


yargs.command({
    
    command: 'list',
    describe:'list a new note',
    builder:{
        
         title: {
  
             describe:'Note title',
             demandOption:true,
             type:'string'

         }

    },
    handler: function(argv){

       console.log("Hello this is list a notes",argv);
    } 
});





//console.log(process.argv)
console.log(yargs.argv)

