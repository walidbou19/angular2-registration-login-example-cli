import {Address} from './address';

export class Company {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: Address = new Address();
}
