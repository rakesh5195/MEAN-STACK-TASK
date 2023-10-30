import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.css']
})
export class RawMaterialComponent implements OnInit {
  rawMaterialInventory: any[] = [
    { id: 1, name: 'Raw Material 1', availableCount: 50 },
    { id: 2, name: 'Raw Material 2', availableCount: 25 }
  ];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.rawMaterials.subscribe((rawMaterials: any) => {
      console.log(rawMaterials);
      if (rawMaterials.length === this.rawMaterialInventory.length) {
        const allAvailable = this.rawMaterialInventory.every((item, i) => {
          const requiredQuantity = rawMaterials[i].requiredQuantity;
          return item.availableCount >= requiredQuantity;
        });

        if (allAvailable) {
          this.rawMaterialInventory.forEach((item, i) => {
            const requiredQuantity = rawMaterials[i].requiredQuantity;
            item.availableCount -= requiredQuantity;
          });
        } else {
          alert("Please check quantity availability!");
        }
      } else {
        alert("Invalid material received from rawMaterials!");
      }
    });
  }
}
