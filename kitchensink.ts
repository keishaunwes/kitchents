const person: {
    name: string;
    states: number;
  } = {
    name: "Chase",
    states: 50
  };
  
  console.log(person.name);
  console.log(person.states);
  
  function add(n1: number, n2: number) {
    return n1 + n2;
  }
  
  const number1 = 4;
  const number2 = 5;
  
  console.log(add(number1, number2));
  
  function sayHello(text: string) {
    if (typeof text === "string") {
      alert(text);
    } else {
      console.error("this is wrong");
    }
  }
  let greeting = "Hello World!";
  let greet = 100;
  sayHello(greeting);
  sayHello(greet); //just to show it is working properly
  
  function checkAge(nam: string, ag: number) {
    if (ag < 21) {
      alert(`Sorry ${nam} you aren't old enough to view this page!!`);
    } else {
      console.log(`You are of age ${nam}`);
    }
  }
  checkAge("Chase", 28);
  checkAge("Liam", 4);
  checkAge("Sabrina", 21);
  checkAge("Tanner", 20);
  
  const favVeg: string[] = ["carrots", "potatoe", "celery"];
  for (let i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i]);
  }

  interface Ppl {
    name:string;
    age: number;
  }
  
  
  let People: Array<Ppl> =[
    {
      name: "Chase",
      age: 28
    },
    {
      name: "Sabrina",
      age: 21
    },
    {
      name: "Cheyenne",
      age: 28
    },
    {
      name: "Tanner",
      age: 20
    },
    {
      name: "Liam",
      age: 4
    },
  ];
  
  
    for ( let i = 0; i < People.length; i++) {
       checkAge( People[i].name, People[i].age)
   }
  
   function getLength(pop: string){
      const wordlength = pop.length;
      return wordlength
  }
  
  let x = getLength("Hello World!");
  
  if (x%2 == 0){
      console.log('The world is nice and even!')
  }else{
      console.log( 'The world is an odd place!' )
  }