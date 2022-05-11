let num = [5,8,2,9]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor ${num.length}`)
console.log(`o primeiro valor do vetor ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) {

    console.log(`o valor  não foi encontrado !`)
            
    }
    else {
        console.log(`o valor  esta na posição ${pos}`)
    }

