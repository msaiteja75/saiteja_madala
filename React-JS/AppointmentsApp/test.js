const countries = [
    {name:'India', value: 'IN', cities:['Delhi','Mumbai']},
    {name:'Pak', value: 'PK', cities:['Lahore','Karachi']},
    {name:'Bangladesh', value: 'BG', cities:['Dhaka','Chittagong']}
]

let newarray = countries.map((eachItem, index)=>{
    console.log(index);
})