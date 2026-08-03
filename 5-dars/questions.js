// Matematika savollari

let questions = [

{
question:"25 + 17 = ?",
answers:["40","41","42","43"],
correct:2
},

{
question:"84 - 29 = ?",
answers:["54","55","56","57"],
correct:1
},

{
question:"12 × 8 = ?",
answers:["84","94","96","98"],
correct:2
},

{
question:"144 ÷ 12 = ?",
answers:["10","11","12","13"],
correct:2
},

{
question:"√121 = ?",
answers:["10","11","12","13"],
correct:1
},

{
question:"15² = ?",
answers:["205","215","225","235"],
correct:2
},

{
question:"18 + 26 = ?",
answers:["42","43","44","45"],
correct:2
},

{
question:"200 - 87 = ?",
answers:["111","112","113","114"],
correct:2
},

{
question:"9 × 11 = ?",
answers:["99","98","97","96"],
correct:0
},

{
question:"90 ÷ 9 = ?",
answers:["8","9","10","11"],
correct:2
},

{
question:"37 + 45 = ?",
answers:["80","81","82","83"],
correct:2
},

{
question:"150 - 68 = ?",
answers:["80","81","82","83"],
correct:2
},

{
question:"13 × 7 = ?",
answers:["81","91","101","111"],
correct:1
},

{
question:"196 ÷ 14 = ?",
answers:["12","13","14","15"],
correct:2
},

{
question:"√169 = ?",
answers:["11","12","13","14"],
correct:2
},

{
question:"20² = ?",
answers:["300","350","400","450"],
correct:2
},

{
question:"56 + 19 = ?",
answers:["73","74","75","76"],
correct:2
},

{
question:"500 - 275 = ?",
answers:["205","215","225","235"],
correct:2
},

{
question:"14 × 6 = ?",
answers:["82","83","84","85"],
correct:2
},

{
question:"180 ÷ 15 = ?",
answers:["10","11","12","13"],
correct:2
}

];


// Savollarni aralashtirish

questions = questions.sort(() => Math.random() - 0.5);