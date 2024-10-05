function roadRadar(speed, area){

    let speedLimit = 0
    let speedWithinLimit = true

    switch(area){

        case 'city':
            speedLimit = 50
            if(speed > speedLimit){
                speedWithinLimit = false
            }
            break;
        case 'residential':
            speedLimit = 20
            if(speed > speedLimit){
                speedWithinLimit = false
            }
            break;
        case 'interstate':
            speedLimit = 90
            if(speed > speedLimit){
                speedWithinLimit = false
            }
            break;
        case 'motorway':      
            speedLimit = 130
            if(speed > speedLimit){
                speedWithinLimit = false
            }
            break;    
    }

    let kmsOverLimit = speed - speedLimit
    let status = ''
    if(kmsOverLimit <= 20){
        status = 'speeding'
    } else if(kmsOverLimit <= 40){
        status = 'excessive speeding'
    } else if(kmsOverLimit > 40){
        status = 'reckless driving'
    }

    speedWithinLimit ?
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`):
    console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);

}

roadRadar(40, 'city')

roadRadar(21, 'residential')

roadRadar(120, 'interstate')

roadRadar(200, 'motorway')