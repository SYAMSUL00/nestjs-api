import { IsNotEmpty } from "class-validator";

export class CreateBookDto{

    @IsNotEmpty({message: 'Title harus di isi'})
    readonly title: string;

    @IsNotEmpty({message: 'Author harus di isi'})
    readonly author: string;

    @IsNotEmpty({message: 'ISBN harus di isi'})
    readonly isbn: string;

    @IsNotEmpty({message: 'Tahun terbit harus di isi'})
    readonly publishedYear: number;
}
