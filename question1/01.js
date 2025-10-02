

function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        const filtered = mixedArray
            .filter(item => typeof item === "string")
            .map(word => word.toLowerCase());

        resolve(filtered);
    });
}


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))   
    .catch(error => console.error(error));
