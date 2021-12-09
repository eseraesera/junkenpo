import Junkenpo, {ELEMENT, PLAYER} from './Junkenpo';

test('Paper beats rock', () => {
    const game = new Junkenpo(ELEMENT.ROCK);
    game.respond(ELEMENT.PAPER);
    expect(game.winner).not.toBe(PLAYER.ONE);
    expect(game.winner).toBe(PLAYER.TWO);
});

test('Paper beats water', () => {
    const game = new Junkenpo(ELEMENT.WATER);
    game.respond(ELEMENT.PAPER);
    expect(game.winner).not.toBe(PLAYER.ONE);
    expect(game.winner).toBe(PLAYER.TWO);
});

test('Fire beats rock', () => {
    const game = new Junkenpo(ELEMENT.ROCK);
    game.respond(ELEMENT.FIRE);
    expect(game.winner).not.toBe(PLAYER.ONE);
    expect(game.winner).toBe(PLAYER.TWO);
});

test('Rock beats scissors', () => {
    const game = new Junkenpo(ELEMENT.SCISSORS);
    game.respond(ELEMENT.ROCK);
    expect(game.winner).not.toBe(PLAYER.ONE);
    expect(game.winner).toBe(PLAYER.TWO);
});

test('Rock beats water', () => {
    const game = new Junkenpo(ELEMENT.WATER);
    game.respond(ELEMENT.ROCK);
    expect(game.winner).not.toBe(PLAYER.ONE);
    expect(game.winner).toBe(PLAYER.TWO);
});

test('Fire beats scissors', () => {
    const game = new Junkenpo(ELEMENT.SCISSORS);
    game.respond(ELEMENT.FIRE);
    expect(game.winner).not.toBe(PLAYER.ONE);
    expect(game.winner).toBe(PLAYER.TWO);
});

test('Scissors beats paper', () => {
    const game = new Junkenpo(ELEMENT.PAPER);
    game.respond(ELEMENT.SCISSORS);
    expect(game.winner).not.toBe(PLAYER.ONE);
    expect(game.winner).toBe(PLAYER.TWO);
});

test('Scissors beats water', () => {
    const game = new Junkenpo(ELEMENT.WATER);
    game.respond(ELEMENT.SCISSORS);
    expect(game.winner).not.toBe(PLAYER.ONE);
    expect(game.winner).toBe(PLAYER.TWO);
});

test('Fire beats paper', () => {
    const game = new Junkenpo(ELEMENT.PAPER);
    game.respond(ELEMENT.FIRE);
    expect(game.winner).not.toBe(PLAYER.ONE);
    expect(game.winner).toBe(PLAYER.TWO);
});

test('Water beats fire', () => {
    const game = new Junkenpo(ELEMENT.FIRE);
    game.respond(ELEMENT.WATER);
    expect(game.winner).not.toBe(PLAYER.ONE);
    expect(game.winner).toBe(PLAYER.TWO);
});

test('Same selection means a tie', () => {
    let game = new Junkenpo(ELEMENT.WATER);
    game.respond(ELEMENT.WATER);
    expect(game.winner).toBeNull();

    game = new Junkenpo(ELEMENT.FIRE);
    game.respond(ELEMENT.FIRE);
    expect(game.winner).toBeNull();

    game = new Junkenpo(ELEMENT.ROCK);
    game.respond(ELEMENT.ROCK);
    expect(game.winner).toBeNull();

    game = new Junkenpo(ELEMENT.SCISSORS);
    game.respond(ELEMENT.SCISSORS);
    expect(game.winner).toBeNull();

    game = new Junkenpo(ELEMENT.PAPER);
    game.respond(ELEMENT.PAPER);
    expect(game.winner).toBeNull();
});
