// async function getData(){
//     setTimeout(function (){
//         console.log("have a greate day")
//     }, 3000);
// }
// getData()




// Closure in js

function outerFunc(){
    let name="abcd";
    function innerFunction(){
        console.log(name);
    }
    return innerFunction;
}
let inner=outerFunc();
inner();