class Scientist {
  protected _name: string;
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
    this._name = name;
    this.age = age;
    this.numberOfHenchmen = numberOfHenchmen;
    this.image = image;
    this.desc = desc;
  }

  public get name() {
    return this._name;
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
  getScientist(name: string): Scientist | undefined {
    return this.scientists.find((scientist) => scientist.name === name);
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
    let scientistHolder = document.querySelector(
      "#list-scientists"
    ) as HTMLElement;
    const scientists: Scientist[] = db.getScientists();
    for (const scientist of scientists) {
      let scientistButton = document.createElement("button");
      scientistButton.innerText = scientist.name;
      scientistButton.classList.add("scientist-button");
      scientistButton.addEventListener("click", () =>
        this.drawScientist(scientist.name)
      );
      scientistHolder.append(scientistButton);
    }
  },
  addScientist(): void {
    const formName = document.querySelector("input#name") as HTMLInputElement;
    const formAge = document.querySelector("input#age") as HTMLInputElement;
    const formHenchmen = document.querySelector(
      "input#henchmen"
    ) as HTMLInputElement;
    const formDesc = document.querySelector("input#desc") as HTMLInputElement;

    const newScientist = new Scientist(
      formName.value,
      Number(formAge.value),
      Number(formHenchmen.value),
      undefined,
      formDesc.value
    );

    db.addScientist(newScientist);
    console.log(db.getScientists());
  },
  drawScientist(name: string): void {
    const scientistHolder = document.querySelector(
      "#selected-scientist"
    ) as HTMLElement;
    scientistHolder
      ? (scientistHolder.innerHTML = "")
      : console.log("Error no scientist holder!");
    const newScientist: Scientist | undefined = db.getScientist(name);
    if (newScientist && scientistHolder) {
      for (const row in newScientist) {
        const element = document.createElement("p");
        element.innerText = newScientist[row];
        scientistHolder.append(element);
      }
    }
  }
};
viewEditor.listScientist();
const addButton = document.querySelector("button");
addButton?.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click");
  viewEditor.addScientist();
});
