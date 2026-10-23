


let noms = ["John" , "Steve" , "The MIMIC" , "Mr.Bean" , "Ligma"];

noms.unshift("Kevin");
noms.push("Tracy")

for (let i = 0; i < noms.length; i++) {
    console.log(noms[i]);
}

for (const nom of noms) {
    console.log(nom);
}

noms.forEach((nom) => {
    console.log(nom);
})
