type Scientist = {
  name: string,
  numberOfHenchmen: number,
  age: number,
  desc?: string,
  image: string,
}

let ESCDB:{} = {
  scientists:[] = [
    {
      name: 'Dr. Anna Rippley',
      numberOfHenchmen: 5,
      age: 42,
      image: 'images/Anna_Ripley.png'
    },
    {
      name: 'Dr. Drakken',
      numberOfHenchmen: 1,
      age: 38,
      image: 'images/Dr.Drakken.png'
    },
    {
      name: 'Dr. Doofenshmirtz',
      numberOfHenchmen: 0,
      age: 47,
      image: 'images/Doofenshmirtz.png'
    },
  ],
}