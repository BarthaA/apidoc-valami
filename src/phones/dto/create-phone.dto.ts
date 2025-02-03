import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreatePhoneDto {
  /**
    * The model of the phone
  */
  @IsString()
  @MinLength(3)
  @ApiProperty({
    example: 'NG-123'
  })
  model: string;

  /**
    * The brand of the phone
  */
  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Nokia'
  })
  brand?: string;

  /**
    * The price of the phone in HUF
  */
  @IsInt()
  @IsPositive()
  @ApiProperty({
    example: '25000'
  })
  price: number;
}
