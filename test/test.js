import { Team,  Character, map, ErrorRepository} from "../src/game.js";

const addList = [
    {name: "Дарен", typeCharacter: "высший вампир"},
    {name: "Ариабэт", typeCharacter: "темный эльф-воин"},
];
const testAdd = new Character("Дарен", "высший вампир");
const testAdd2 = new Character("Ариабэт", "темный эльф-воин");


const teamAddTest = test.each(addList);
teamAddTest("testing methods add and toArray from class Team", () => {
    const team = new Team();
    team.add(testAdd);
    team.add(testAdd2);

    expect(team.toArray()).toEqual(addList); 
});


test("test throw in method add from class Team", () => {
    const addThrow = new Character("Дарен", "высший вампир");
    const team = new Team();

    expect(() => {
        team.add(addThrow);
        team.add(addThrow)
    }).toThrow("Выбранный персонаж уже присоединился к вашей команде");
});


const teamAddAllTest = test.each(addList);
teamAddAllTest("testing methods addAll from class Team", () => {
    const team = new Team();
    team.addAll(testAdd, testAdd2, testAdd2);

    expect(team.toArray()).toEqual(addList); 
})   

const error = new ErrorRepository(404, "Not found");
const translateList = [error.translate(404), error.translate(100)];

const translateTest = test.each(translateList);
translateTest("testing methods add and toArray from class Team", () => {
    error.add(500, "Internal server error");
    error.add(510, "Not Extended");

    const translateTestResalt = ["Not found", "Unknown error"];

    expect(translateTestResalt).toEqual(translateList); 
});
