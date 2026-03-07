// const createUser=(name,age=18,skills)=>{
// const bio=`X is 22 years old and knows ${skills}`
// const userInfo={
//     name,
//     age,
//     ...skills,
//     bio
// }
// return userInfo
// }
// console.log(createUser('keya',24,['dsa&algo','react','js','backend']))

const createUser=(name,age=18,...skills)=>{
    // ...skills: This is the Rest Operator. It gathers all remaining arguments passed into the function and puts them into an array called skills.
const bio=`${name} is ${age} years old and knows ${skills.join(', ')}`
// Backticks (`): Allow you to embed variables directly into strings using ${}.

// .join(','): Since skills is an array, join flattens it into a single string separated by commas. Without this, the bio might look a bit messy depending on the environment.
const userInfo={
    name,
    age,
    skills,
    bio
}
return userInfo
}
console.log(createUser('keya',24,'dsa&algo','react','js','backend'))


// The spread operator, represented by three dots (...), works by taking all the items in an array and spreading them out, essentially unpacking the array so that each item becomes an individual element.

// The rest operator is represented by three dots (...). When used in a function's parameter list, it catches any extra arguments passed to the function and packs them neatly into an array. 