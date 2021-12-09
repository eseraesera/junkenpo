export const ELEMENT = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors',
    FIRE: 'fire',
    WATER: 'water',
};

export const PLAYER = {
    ONE: 'p1',
    TWO: 'p2',
}

const BEATEN_BY_MAP = {
    [ELEMENT.ROCK]: [ELEMENT.PAPER, ELEMENT.FIRE],
    [ELEMENT.PAPER]: [ELEMENT.SCISSORS, ELEMENT.FIRE],
    [ELEMENT.SCISSORS]: [ELEMENT.ROCK, ELEMENT.FIRE],
    [ELEMENT.FIRE]: [ELEMENT.WATER],
    [ELEMENT.WATER]: [ELEMENT.PAPER, ELEMENT.PAPER, ELEMENT.SCISSORS],
};

class Junkenpo {
    constructor(playerOneElement) {
        this.playerOneElement = playerOneElement;
        this.winner = null;
    }

    respond(playerTwoElement) {
        if (playerTwoElement === this.playerOneElement) {
            // Tie
            return;
        }

        const elementsThatCanBeatPlayerTwo = BEATEN_BY_MAP[playerTwoElement];
        this.winner = elementsThatCanBeatPlayerTwo.includes(this.playerOneElement)
            ? PLAYER.ONE
            : PLAYER.TWO;
    }
}

export default Junkenpo;
