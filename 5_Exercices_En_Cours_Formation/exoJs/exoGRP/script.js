// function myNumber(n1){
//     let saveNumberDivision
//     let saveNumberEntree
//     saveNumberEntree = n1
//     for (let i=0 ; i<9 ; i++){
//         n1 += n1
//         if(i==4){
//             saveNumberDivision = n1
//         }
//     }
//     console.log(n1 / saveNumberDivision)
// }
// myNumber(567)

// function chocoBlasto(){
//     let numberOfChocoblasto = 0
//     let nbrGetChocos = 0
//     let retardChocos
//     for (let i=0 ; i<60 ; i++){
//         numberOfChocoblasto += 1
//         if (i%2 == 0){
//             numberOfChocoblasto +=1
//         }
//         if (i%3 == 0){
//             nbrGetChocos += 1
//         }
//     }
//     retardChocos = (numberOfChocoblasto - nbrGetChocos)
//     console.log("Jean-marie a fait l'exploit d'avoir", retardChocos,"tournées de retard, ce qui est une dinguerie #imo" )
// }

// chocoBlasto()
function romaricoConcentrão(){
    let heure = 9
    let minute = 0
    let dems = heure + minute
    let minuteTotal = 0
    for (let i=0 ; i<8 ; i++){
        for(let i=0 ; i<60 ; i++){
            minute += 1
            if(dems%7 == 0){
                minuteTotal += 1
            }
        }
        heure += 1
    }
    console.log(minuteTotal)
}

romaricoConcentrão()