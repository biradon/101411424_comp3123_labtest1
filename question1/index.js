
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        let result = [];
        for(let i = 0; i < arr.length ; i++) {
            if (typeof arr[i] === 'string') {
                result.push(arr[i].toLowerCase());
            }
        }
        if(result.length > 0) {
            resolve(result);
        } else {
            reject("There is no string to lower case")
        }
    })
} 


lowerCaseWords(mixedArray)
    .then(result => {
        console.log(result);  
    })
    .catch(error => {
        console.error(error);
    });





