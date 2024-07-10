const minhaPromise = new Promise((resolve, reject) => {
    let condicao = false;

    if (condicao){
        resolve(`resolvido`)
    } else {
        reject(`Error`)
    }
})

minhaPromise.then((resultado) => {
    console.log(resultado)
}).catch((Error) => {
    console.log(Error)
})