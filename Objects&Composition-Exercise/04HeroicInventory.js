function heroicInventory(arr) {
    let heroesRegister = [];

    arr.forEach(hero => {
        let [name, level, items] = hero.split(' / ');

        // if name or level are undefined or empty skip iteration
        if (!name || !level) {
            return;
        }
        level = Number(level);
        items = items ? items.split(', ') : []; // Handle missing items as an empty array

        heroesRegister.push({ name, level, items });
    });
    console.log(JSON.stringify(heroesRegister));
}


// heroicInventory(['Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'])

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])