/*EXERCICE1*/
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(fruits);
fruits.splice(0,1);
console.log(fruits);
fruits.sort();
console.log(fruits);
fruits.push("Kiwi");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.reverse();
console.log(fruits);

/*EXERCICE 2 */
const moreFruits = ["Banana", 
                        ["Apples", 
                            ["Oranges"], 
                        "Blueberries"]
                    ];
console.log(moreFruits);
console.log(moreFruits[1][1]);