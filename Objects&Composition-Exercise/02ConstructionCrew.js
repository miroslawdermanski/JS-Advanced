function constructionCrew(worker){

    if((worker['dizziness']) && (worker.dizziness == true)){
        
        let waterIntake = 0.1 * worker.weight * worker.experience
        worker.levelOfHydrated += waterIntake
        worker.dizziness = false
    }
    return worker
}

console.log(constructionCrew({ weight: 80,
                            experience: 1,
                            levelOfHydrated: 0,
                            dizziness: true }))

console.log(constructionCrew({ weight: 120,
                            experience: 20,
                            levelOfHydrated: 200,
                            dizziness: true }))

console.log(constructionCrew({ weight: 95,
                            experience: 3,
                            levelOfHydrated: 0,
                            dizziness: false }))   