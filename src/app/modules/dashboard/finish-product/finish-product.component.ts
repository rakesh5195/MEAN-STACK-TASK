import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-finish-product',
  templateUrl: './finish-product.component.html',
  styleUrls: ['./finish-product.component.css']
})
export class FinishProductComponent implements OnInit {

  public products: any[] = [
    {
      id: 1,
      productName: "TV",
      count: 0,
      rmInfo: [{ rmId: 1, rmPerUnitCount: 2 }, { rmId: 2, rmPerUnitCount: 3 }]
    },
    {
      id: 1,
      productName: "Radio",
      count: 0,
      rmInfo: [{ rmId: 1, rmPerUnitCount: 1 }, { rmId: 2, rmPerUnitCount: 4 }]
    }
  ];

  constructor(private _productService: ProductService) { }

  ngOnInit() {


  }

  createFinishedProduct(product: any) {
    switch (product.productName) {
      case 'TV':
        this.calculateAndAdjustRawMaterials(product);
        break;
      case 'Radio':
        this.calculateAndAdjustRawMaterials(product);
        break;
      default:
        break;
    }
  }

  public calculateAndAdjustRawMaterials(product: any) {
    const rawMaterialOneRequirements = product.count * product.rmInfo[0].rmPerUnitCount;
    console.log(rawMaterialOneRequirements)
    
    const rawMaterialTwoRequirements = product.count * product.rmInfo[1].rmPerUnitCount;
    console.log(rawMaterialTwoRequirements);
    this._productService.rawMaterials.next([{ requiredQuantity: rawMaterialOneRequirements, rmId: product.rmInfo[0].rmId }, { requiredQuantity: rawMaterialTwoRequirements, rmId: product.rmInfo[1].rmId }]);
  }

}