import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  rawMaterials: any = new BehaviorSubject([{ requiredQuantity: 0, rmId: 1 }, { requiredQuantity: 0, rmId: 2 }]);

}
