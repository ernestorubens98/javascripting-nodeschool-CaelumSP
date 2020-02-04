let pets = ['cat', 'dog', 'rat'];

for (let i = 0; i < pets.length; i++) {
    console.log(`Singular: ${pets[i]}`);

    pets[i] = pets[i] + 's';
    
    console.log(`Plural: ${pets[i]}`);
};

//console.log(pets);