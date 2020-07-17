console.log('untils.js')


const name = 'sumaya'
const age = 25;
let fullname = "";

const myname = () =>{

    fullname = name +" is "+ age;

    return fullname;
}

module.exports = {
    name, age, myname};