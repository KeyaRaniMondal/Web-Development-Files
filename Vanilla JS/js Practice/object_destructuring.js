const user = {
name:'keya',
age:23,
skills: []
}

user.skills.push('software engineering','web development','AI Engineer','frontend developer','backend developer')
// user.skills.pop()
// user.skills.pop([3])
// user.skills.splice(3,1)//removes element
// user.skills.splice(3,1,'data scientist')//updates element
user.skills.splice(5,0,'system designer')//adding element
user.age=24
console.log(user)