import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ResponseData } from 'src/global/GlobalClass';
import { HttpMessage } from 'src/global/GlobalEnum';
import { Product } from 'src/models/product.model';
import { ProductDTO } from 'src/DTO/product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) { }
    @Get()
    getProducts(): ResponseData<Product[]> {
        try {
            return new ResponseData<Product[]>(this.productService.getProducts(), HttpStatus.OK, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product[]>(null, HttpStatus.NOT_FOUND, HttpMessage.ERROR);
        }
    }

    @Post()
    createProduct(@Body() productDTO: ProductDTO): ResponseData<ProductDTO> {
        try {
            return new ResponseData<ProductDTO>(this.productService.createProduct(productDTO), HttpStatus.CREATED, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<ProductDTO>(null, HttpStatus.NOT_FOUND, HttpMessage.ERROR);
        }
    }

    @Get('/:id')
    detailProduct(@Param('id') id: number): ResponseData<Product> {
        try {
            return new ResponseData<Product>(this.productService.detailProduct(id), HttpStatus.OK, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.NOT_FOUND, HttpMessage.ERROR);
        }
    }

    @Put('/:id')
    updateProduct(@Body() productDto: ProductDTO, @Param('id') id: number): ResponseData<Product> {
        try {
            return new ResponseData<Product>(this.productService.updateProduct(productDto, id), HttpStatus.ACCEPTED, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.NOT_FOUND, HttpMessage.ERROR);
        }
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: number): ResponseData<boolean> {
        try {
            return new ResponseData<boolean>(this.productService.deleteProduct(id), HttpStatus.ACCEPTED, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<boolean>(null, HttpStatus.NOT_FOUND, HttpMessage.ERROR);
        }
    }
}
