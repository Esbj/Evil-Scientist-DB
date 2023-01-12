class Scientist {
  protected name: string;
  protected age: number;
  protected numberOfHenchmen: number;
  protected image: string;
  protected desc?: string;

  constructor(
    name: string,
    age: number,
    numberOfHenchmen: number,
    image: string,
    desc?: string
  ) {
    this.name = name
    this.age = age
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

console.log(db.getScientists())