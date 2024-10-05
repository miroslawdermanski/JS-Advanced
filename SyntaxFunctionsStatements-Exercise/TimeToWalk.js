function timeToWalk(steps, footprintLgthMtrs, speed){

    let distanceInKmtr = (steps * footprintLgthMtrs) / 1000
    let breaksCount = parseInt(distanceInKmtr / 0.5)
    let breakTime = breaksCount * 60
    let total_time_seconds = ((distanceInKmtr / speed) * 3600) + breakTime
    
    let hours = Math.floor(total_time_seconds / 3600)
    total_time_seconds %= 3600
    let minutes = Math.floor(total_time_seconds / 60)
    let seconds = Math.ceil(total_time_seconds % 60)

    let formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    console.log(formattedTime);
}

timeToWalk(4000, 0.60, 5)

timeToWalk(2564, 0.70, 5.5)