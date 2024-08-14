import { Body, Controller, Get, Query, Post, Param, Patch, Delete, UseInterceptors, Session, UseGuards } from '@nestjs/common';
import { BabyService } from './baby.service';
import { CreateBabyDto } from './dtos/create-baby.dto';
import { UpdateBabyDto } from './dtos/update-user.dto';

@Controller('baby')
export class BabyController {
    constructor(private babyService:BabyService){}

        //Menampilkan seluruh data
    @Get()
    findAll(@Query('email') email:string){
        return this.babyService.find(email);
    }

    //Membuat user baru
    @Post()
    createUser(@Body() body:CreateBabyDto){
       return this.babyService.create(body.nama, body.tanggalLahir, body.tanggalPertumbuhan, body.beratBadan, body.tinggiBadan, body.lingkaranKepala, body.foto)
    }

    //Menemukan satu user saja berdasarkan id
    @Get('/:id')
    findOne(@Param('id') id:string){
        return this.babyService.findOneBy(parseInt(id))
    }

    //Mengupdate user
    @Patch('/:id')
    update(@Param('id') id:string, @Body() body:UpdateBabyDto){
        return this.babyService.update(parseInt(id), body);
    }

    //Menghapus user
    @Delete('/:id')
    removeUser(@Param('id') id:string){
        return this.babyService.remove(parseInt(id));
    }
}
