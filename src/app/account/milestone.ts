// export class Milestone {
// 	id: number;
// 	name: string;
// }

export class Milestone {
  id: number;
  name: string;
  progress: number;
  detail: string;
  notes: string;
  img: string;
  icon: string;
  submilestone: Submilestone;
}

export class Submilestone {

  checkbox1: Checkbox;
  checkbox2: Checkbox;
  checkbox3: Checkbox;
  checkbox4: Checkbox;


}

export class Checkbox {

  name: string;
  state: boolean;

}