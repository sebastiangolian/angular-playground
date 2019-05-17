import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Product } from 'src/app/interfaces/product.interface';
import { Products } from 'src/app/data/products';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  private products: Array<Product> = Products;

  constructor(public messageService: MessageService) {
    this.messageService.message = "Welcome in app-test component."
  }

  ngOnInit() {
    
  }
}
