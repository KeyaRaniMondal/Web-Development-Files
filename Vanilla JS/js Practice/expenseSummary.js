const arrExpense=[1000000,1400000,2000000,4000000,2500,54630000,2324454,6778434,343,10,40,50]
let total=0
for (i in arrExpense){
total+=arrExpense[i]
}
console.log(total)

arrExpense.forEach(i=>total+=i)

const expenseFilter=arrExpense.filter(i=>i>1000)
console.log(expenseFilter)

const tkTousd=arrExpense.map(conv=>conv*0.0082)
console.log(tkTousd)

const totalUsingReduce=arrExpense.reduce((acc,curr)=>acc+curr,0)
console.log(totalUsingReduce)