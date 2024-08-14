import { IsDate, IsEmail, IsNumber, IsString } from "class-validator";

export class UpdateBabyDto{
    
    @IsString()
    nama:string;

    @IsDate()
    tanggalLahir:Date;

    @IsDate()
    tanggalPertumbuhan:Date;

    @IsNumber()
    beratBadan: number;
  
    @IsNumber()
    tinggiBadan: number;
  
    @IsNumber()
    lingkaranKepala: number;
  
    @IsString()
    foto: string;
}