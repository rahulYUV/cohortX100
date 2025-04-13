function getLength(Stringg){
     let num = Stringg.length;
     return num;
}

    console.log(getLength("rahull"));

function getIndex(str , target){
    console.log("org String:", str);
    console.log("the index is",str.lastIndexOf(target));
}

getIndex("rahul kumar","r");
// to get the last index => .lastIndexOf;
// to get the index => .indexOf

// slice 

let name = "rahulkumar";
// console.log(name.slice(4));
// op is => from 4th=n index to last index 
// in slice the last one is exclusive  


//console.log(name.substr(2,4));  => print 2 to and 4 more element;

function iterate(Str){
    let name =""
    for(let i =0;i<Str.length;i++
    ){
        
         name = name + Str[i]
         console.log(name);
    }
}
// namee = "rahu";
// iterate("rahul")


// replace()


function replaceThings(salutation ,lastName){
    const name =`${salutation} Sir `;
         
    return name;
}

 const value = "hi im rahul";
//  console.log(value.split(" "));// split based on the delimeter;
  
const val = "   rahul kumar"
// console.log(val.trim());=> trim the from beg ot end the spaces 

console.log(val.toUpperCase())

let change = "changee";
// String values are immutable in JavaScript
// This means once a string is created, it cannot be modified
// Any operation that appears to modify a string actually creates a new string

// charAt(index) - returns the character at specified index
console.log(change.charAt(0)); // returns 'c'

// charCodeAt(index) - returns the Unicode value of character at specified index
// console.log(change.charCodeAt(5)); // returns ASCII/Unicode value of 'e'

// at(index) - allows negative indexing to access characters from end
// at(-1) gives last character, at(-2) gives second last, and so on
// console.log(change.at(-1)); // returns 'e' (last character)

let test = "what we can do";

// console.log(test.includes("we can"));
// const  sli ="javaScript";
// console.log(sli.slice(-3,-1))
// console.log(sli.substring(0,4));

// backticks 

        let greet = "rahul";
        let msg = `${greet},good Morning`;
        console.log(msg)
