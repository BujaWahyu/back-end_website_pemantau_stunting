import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Baby } from './bayi.entity'; // Pastikan path entitas Baby sesuai

@Injectable()
export class BabyService {
  constructor(@InjectRepository(Baby) private babyRepository: Repository<Baby>) {}

    //Menampilkan seluruh data user 
    find(nama:string){
        return this.babyRepository.find({
            where:{
                nama,
            },
        })
    }

    //Menampilkan salah satu user
    async findOneBy(id:number){
        const user = await this.babyRepository.findOneBy({id})

        if(!user){
            throw new NotFoundException("User Tidak ditemukan")
        }

        return user;
    }

    //Membuat data user baru
    async create(nama:string, tanggalLahir:Date, tanggalPertumbuhan:Date, beratBadan:number, tinggiBadan:number, lingkaranKepala:number, foto:string){
        const user = this.babyRepository.create({nama,tanggalLahir,tanggalPertumbuhan,beratBadan,tinggiBadan,lingkaranKepala,foto});
        await this.babyRepository.save(user);
        return user;
    }

    //Mengupdate user
    async update(id:number, attrs: Partial<Baby>){
        const user =await this.findOneBy(id)

        if(!user){
            throw new NotFoundException("User tidak ditemukan");
        }

        Object.assign(user, attrs)
        return this.babyRepository.save(user);
    }

    //Menghapus data user
    async remove(id:number){
        const user =await this.findOneBy(id)

        if(!user){
            throw new NotFoundException("User tidak ditemukan");
        }

        return this.babyRepository.remove(user);
    }
}
