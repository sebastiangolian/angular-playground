import { carData } from './../data/car.data';
import { heroData } from '../data/hero.data';
import { roleData } from '../data/role.data';
import { userData } from '../data/user.data';
import { DbBackend } from '../interfaces/db-backend.interface';

export class DbBackendModel implements DbBackend {
  users = userData;
  heros = heroData;
  roles = roleData;
  cars = carData;
}
