// in this file of code we will learn string functions in details 

let ST_name= "Amit sen"
 const str_name = new String ('Emran Hashmi')
//console.log(`Hii my name is ${ST_name} and i am a big fan of ${str_name}`)


//chracter position in a string 
console.log(str_name.at(1))
console.log (str_name.charAt(2))

//length of a String 
console.log(str_name.length)

//chatat()
console.log(`The character at index 4   `)

let para = "Launch your career as a front-end developer. Build job-ready skills for an in-demand career and earn a credential from Meta. No degree or prior experience required to get started."

let search_termf = "as"
let search_terml = "get"

let index_first = para.indexOf(search_termf)
let index_last = para.lastIndexOf(search_terml)

console.log(`so the index of the first "${search_termf}" is ${index_first}`)

console.log(`so the index of the last "${search_terml}" is ${index_last} `)

