function pieceOfPie(array, flavour1, flavour2){

    let flvr1Idx = array.indexOf(flavour1)
    let flvr2Idx = array.indexOf(flavour2)
    let result = array.slice(flvr1Idx, flvr2Idx+1)

    return result
}

console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
   'Key Lime Pie',
   'Lemon Meringue Pie'))

console.log(pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
   'Pot Pie',
   'Smoked Fish Pie'))