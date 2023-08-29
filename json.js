//javaScript Object Notation-->JSON
const user = {
    id: 182, name: 'Naeem', job: "beker"
}
const stringified = JSON.stringify(user)
// console.log(user)
// console.log(stringified)
// { id: 182, name: 'Naeem', job: 'beker' }//js
// {"id":182,"name":"Naeem","job":"beker"}//json


const user1 = {
    id: 5001,
    name: 'Shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'

    }
}

let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

//console.log(data2)
const data2Stringified = JSON.stringify(data2)
console.log(data2Stringified)
console.log(typeof (data2Stringified))
const StringToObjdata2Stringified = JSON.parse(data2Stringified)
console.log(StringToObjdata2Stringified)
console.log(typeof (StringToObjdata2Stringified))
