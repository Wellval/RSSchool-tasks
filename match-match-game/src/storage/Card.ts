export class Card {

    public image: String;
    public isFlipped: Boolean;

    constructor(image: String) {
        this.image = image;
        this.isFlipped = false;
    }
}