const familyMembers = [
    {name:'Mohan', age:25},
    {name:'sohan', age:30},
    {name:'Rohan', age:35},
    {name:'Gohan', age:40},
    {name:'Kohan', age:45},
    {name:'Lohan', age:50}
]

const totalAge = familyMembers.reduce((acc,cur)=>{
  return acc+cur.age
},0)
console.log(totalAge) // 225;


const averageAge = totalAge/familyMembers.length
console.log(averageAge) // 35