//resolves after 500ms
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ message: "delayed success!" });
        }, 500);
    });
};

//rejects after 500ms
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ error: "delayed exception!" });
        }, 500);
    });
};

//calling
resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));
