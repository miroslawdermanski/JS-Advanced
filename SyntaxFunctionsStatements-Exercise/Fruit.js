function fruit(str, grams, kgs){

    const cost = (grams / 1000 * kgs).toFixed(2)
    console.log(`I need $${cost} to buy ${(grams/1000).toFixed(2)} kilograms ${str}.`);

}

fruit('orange', 2500, 1.80)

fruit('apple', 1563, 2.35)