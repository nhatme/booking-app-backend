import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/DTO/product.dto';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductsService {

    private products: Product[] = [
        { id: 1, categoryId: 10, productName: "meow", price: 100 },
        { id: 2, categoryId: 3, productName: "dog", price: 1000 },
        { id: 3, categoryId: 5, productName: "chicken", price: 10 },
    ]

    getProducts(): Product[] {
        return this.products;
    }

    createProduct(productDTO: ProductDTO): Product {
        const product: Product = {
            id: Math.random(),
            ...productDTO
        }
        this.products.push(product);
        return product;
    }

    detailProduct(id: number): Product {
        return this.products.find(item => item.id === Number(id));
    }

    updateProduct(productdto: ProductDTO, id: number): Product {
        const index = this.products.findIndex(item => item.id === Number(id));
        this.products[index].categoryId = productdto.categoryId;
        this.products[index].productName = productdto.productName;
        this.products[index].price = productdto.price;
        return this.products[index];
    }

    deleteProduct(id: number): boolean {
        const index = this.products.findIndex(item => item.id === Number(id));
        if (index !== -1) {
            this.products.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }
}
