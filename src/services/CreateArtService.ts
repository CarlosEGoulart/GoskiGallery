import prismaClient from "../prisma";

interface CreateArtProps{
    title: string,
    description: string,
    year: number,
    imageUrl: string,
    artistId: String
}

export default class CreateArtService{
    async execute({ title, description, year, imageUrl, artistId }: CreateArtProps){
        
        const Art = await prismaClient.art.create({
            data:{
                title,
                description,
                year,
                imageUrl,
                artistId
            }
        });

        return Art;
    };
}