//Intersection Types
interface Manager {
  name: string;
  keyHolder: boolean
  contact: string;
}

interface Employees {
  name: string;
  department: string;
  contact: string
  leader: string;
}


let joyce: Manager;
joyce = {
  name: 'Joyce Guilas',
  keyHolder: true,
  contact: '925 649 5564'
}
console.log(joyce)

type AssistantManager = Manager & Employees;

let am: AssistantManager = {
  name: 'Hayden Lafrades',
  keyHolder: true,
  contact: '925 777 7777',
  department: 'Sporting Goods',
  leader: 'Joyceee'
}
console.log(am);