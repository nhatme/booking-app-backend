import { IsNotEmpty, IsNumber, MinLength } from "class-validator";

export class ProductDTO {
    @IsNotEmpty()
    categoryId?: number;
    @MinLength(5, { message: "this field must be longer than 5 characters" })
    productName?: string;
    @IsNumber()
    price?: number;
}