


let obj  = { 
    name: 'Jon', 
    Adresse: 'Vejnavn',
    fun: function test(message) {
        console.log('Message text: ' + message)
    }
    }

    console.log(obj); 
    console.log(obj.name +" "+ obj.Adresse)
    obj.fun('blalal')

    let tekst = '{ "name": \"Jon\", "Adresse": \"Vejnavn\" }'

    let nytobj = JSON.parse(tekst) 

    console.log(nytobj); 


    // Hvad er en funktion - og hvordan bruger man dem? 

    const fun = function funfun(message) {
        let tmp = message  + "Det var ikke fun.... "
        console.log(tmp)
        return tmp 
    }

    const result = fun ('Skriv mig ud! ') 
    console.log('result: ' + result)

    //Hvad betyder immutable 


    //Hvad er et array og hvordan bruger man det? 

    arr = [1,2,3,4]
    arrtxt = ['Ole', 'Bent', 'Rasmus']

    console.log(arrtxt.join(", "))

    function dobbletOp (x) {
       return  x * 2
    }  


    const dobbletOpArr = arr.map(dobbletOp) 

    console.log(dobbletOpArr)


    // Hvad er en arrow-funktion ?
    
    const dobbletOpArrow = arr.map((x) => x * 2 ) 
    console.log(dobbletOpArrow)

    

    // 1) Using existing functions that takes a callback as an argument 

    //a) 
let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]

let namesWithA  = names.filter(containsA)

function containsA (value) {
        return value.includes("a"); 
    

}

console.log (namesWithA)

//b) 

    let reverseNames = names.map(s => s.split("").reverse().join(""))
    //let reverseNames = names.map(reversename)

    console.log(names)
    console.log ("omvendt?: " + reverseNames)



    // 2) Implement user defined functions that take callbacks as an argument 

    // a) 

    function myFilter (array, callback) {



    }


    // 4) Getting really comfortable with filter and map
    var numbers = [1, 3, 5, 10, 11];


    let result1 = [4,8,15,21,11]


  /*  b) Use map() to create the <a>’s for a navigation set and eventually a string like below (use join() to get the string of <a>’s): */
  /*
<nav>
  <a href=””>Lars</a>
  <a href=””>Peter</a>
  <a href=””>Jan</a>
  <a href=””>Bo</a>
</nav>

*/
let opg4names = ['Lars', 'Peter', 'Jan', 'Bo']

let linkNames = opg4names.map(name => {
  return '<a href="">' + name + '</a>'
})

let htmlString = '<nav>' + linkNames.join("") + '</nav>'

console.log(htmlString)



let tablenames = [
    { name: "Lars", phone: "1234567" }, 
    { name: "Peter", phone: "675843" }, 
    { name: "Jan", phone: "98547" }, 
    { name: "Bo", phone: "79345" }
    
];



let tableData = tablenames.map(name => {
return  '<tr>' + '<td>' + name.name + '</td>' + '<td>' + name.phone + '</td></tr>'
}).join("")

console.log (tableData)


let htmltable = '<table><tr><th>Name</th><th>Phone</th></tr>' + tableData + '</table>'

console.log (htmltable)



















