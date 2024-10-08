function createAssemblyLine(){

    return {
        hasClima: function(object){

            object.temp = 21
            object.tempSettings = 21
            object.adjustTemp = function(){
                if(object.temp < object.tempSettings){
                    object.temp += 1
                } else if(object.temp > object.tempSettings){
                    object.temp -= 1
                }
            }
        },
        hasAudio: function(object){

            object.currentTrack = {name: null, artist: null}
            object.nowPlaying = function(){
                    console.log(`Now playing ${object.currentTrack.name} by ${object.currentTrack.artist}`)              
            }
        },
        hasParktronic: function(object){

            object.checkDistance = function(distance){

                if(distance < 0.1){
                    console.log('Beep! Beep! Beep!');
                } else if(distance < 0.25){
                    console.log('Beep! Beep!');                   
                } else if(distance < 0.5){
                    console.log('Beep!');                   
                } else {
                    console.log('');                   
                }
            }
        }
    }
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);
