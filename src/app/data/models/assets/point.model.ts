class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.set(x, y);
    }

    /* move this point on line relative to center further or closer (negative) */
    move(amount: number) {
        const center: Point = new Point(50, 50);
        const original: Point = new Point(75, 75);
        const distance = Math.sqrt(Math.pow(center.x - original.x, 2) + Math.pow(center.y - original.y, 2))

        const x3 = original.x + (amount / distance) * (center.x - original.x);
        const y3 = original.y + (amount / distance) * (center.y - original.y);

        console.log(x3 + " " + y3);

    }
    set(x: number, y: number) {
        this.x = this.normalize(x);
        this.y = this.normalize(y);
    }

    /* relative coordinates: min 0 max 100 */
    normalize(n: number) {
        if (n < 0) {
            n = 0;
        }
        else if (n > 100) {
            n = 100;
        }

        return n;
    }
}