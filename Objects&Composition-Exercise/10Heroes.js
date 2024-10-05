function solve(){

    const fighter = function(fighterName){

        let fighter = {}
        fighter['name'] = fighterName
        fighter['health'] = 100
        fighter['stamina'] = 100
        fighter['fight'] = function(){
            if(fighter['stamina'] > 0){
                fighter.stamina--
                console.log(`${fighter.name} slashes at the foe!`);          
            }
        }
        return fighter
    }

    const mage = function(mageName){

        let mage = {}
        mage['name'] = mageName
        mage['health'] = 100
        mage['mana'] = 100
        mage['cast'] = function(spell){
            if(mage['mana'] > 0){
                mage.mana--
                console.log(`${mage.name} cast ${spell}`);
                
            }
        }
        return mage
    }

    return {fighter, mage}
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
