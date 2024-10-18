function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {
            return 0;
        }

        changeUnits(newUnits) {
            this.units = newUnits;
        }

        convertUnits(value) {
            if (this.units === 'm') return value / 100;
            if (this.units === 'mm') return value * 10;
            return value;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units = 'cm') {
            super(units);
            this._radius = radius;
        }

        get area() {
            const radius = this.convertUnits(this._radius);
            return Math.PI * radius * radius;
        }

        toString() {
            const radius = this.convertUnits(this._radius);
            return `${super.toString()} Area: ${this.area} - radius: ${radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units = 'cm') {
            super(units);
            this._width = width;
            this._height = height;
        }

        get area() {
            const width = this.convertUnits(this._width);
            const height = this.convertUnits(this._height);
            return width * height;
        }

        toString() {
            const width = this.convertUnits(this._width);
            const height = this.convertUnits(this._height);
            return `${super.toString()} Area: ${this.area} - width: ${width}, height: ${height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}