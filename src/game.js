export class Character {
    constructor(name, typeCharacter) {
        this.name = name;
        this.typeCharacter = typeCharacter;
    }
}


export class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if(this.members.has(character)){
          throw new Error("Выбранный персонаж уже присоединился к вашей команде");
        } else {
          this.members.add(character);
        }
    }

    addAll(...characters){
        const charactersArr = [...characters];
        charactersArr.forEach(
            character => {
                if(!this.members.has(character)) {
                    this.members.add(character);
                };
            }
        )
    }

    toArray() {
        return Array.from(this.members);
    }
};

export const map = new Map();
export class ErrorRepository {
    constructor(code, description) {
        this.code = code;
        this.description = description;

        map.set(
            code,
            description,
        );
    }
    add(code, description){
        map.set(
            code,
            description,
        );
    }
    
    translate(code) {
        if (map.has(code)) {
            return map.get(code);
        } else {
            return "Unknown error";
        }
    }
}


