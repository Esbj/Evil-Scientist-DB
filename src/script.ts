class Scientist {
  protected name: string;
  protected age: number;
  protected numberOfHenchmen: number;
  protected image?: string;
  protected desc?: string;

  constructor(
    name: string,
    age: number,
    numberOfHenchmen: number,
    image?: string,
    desc?: string
  ) {
    this.name = name;
    this.age = age;
    this.numberOfHenchmen = numberOfHenchmen;
    this.image = image;
    this.desc = desc;
  }
}
class ESDB extends Scientist {
  private scientists: Scientist[] = [];
  addScientist(scientist: Scientist): void {
    this.scientists.push(scientist);
  }
  getScientists(): Scientist[] {
    return this.scientists;
  }
}

let db = new ESDB("Dr Anna Ripley", 35, 4, "images/Anna_Ripley.png");

const doofenshmirtz = new Scientist(
  "Dr. Heinz Doofenshmirtz",
  48,
  0,
  "images/Doofenshmirtz.png",
  "Dr. Doofenshmirtz is a scientist whos main focus on mechanics that has a high output of machines, mainly ray guns with evil intent."
);
const drakken = new Scientist("Dr. Drakken", 45, 1, "images/Dr.Drakken.png");

db.addScientist(drakken);
db.addScientist(doofenshmirtz);

let viewEditor = {
  listScientist(): void {
    // let scientistHolder = document.querySelector("#list-scientists");
  },
  addScientist(): void {
    const formName = document.querySelector("input#name") as HTMLInputElement
    const formAge = document.querySelector("input#age") as HTMLInputElement
    const formHenchmen = document.querySelector("input#henchmen") as HTMLInputElement
    const formDesc = document.querySelector("input#desc") as HTMLInputElement
  }
};

const addButton = document.querySelector("button");
addButton?.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click");
  viewEditor.addScientist()
});