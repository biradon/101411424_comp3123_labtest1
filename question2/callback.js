function resolvedPromise() {
    return new Promise((resolve, reject) => {
        let x = 1
        if(x > 0) {
            setTimeout(() => {
                let sucess = {'message': 'delayed success!'}
                resolve(sucess);
            }, 500)
        } else {
            reject("Sorry please try again")
        }
    })
} 

function rejectedPromise() {
    return new Promise((resolve, reject) => {
        let x = 1
        if(x < 0) {
            setTimeout(() => {
                try {
                    throw new Error('error: try again')
                } catch (e) {
                    console.log(e);
                }
            }, 500)
        } else {
            let error = {'error': 'delayed exception!'}
            reject(error)
        }

    })
} 


resolvedPromise()
    .then(result => {
        console.log(result);  
    })
    .catch(error => {
        console.error(error);
    });

rejectedPromise()
    .then(result => {
        console.log(result);  
    })
    .catch(error => {
        console.error(error);
    });
