function rectangle(width, height, color){

    color = color.split('')
    color[0] = color[0].toUpperCase()

    class Rectangle{

        constructor(width, height, color){
            this.width = width
            this.height = height
            this.color = color.join('')
        }
        calcArea(){
            return this.width * this.height
        }
    }
    return new Rectangle(width, height, color)
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
