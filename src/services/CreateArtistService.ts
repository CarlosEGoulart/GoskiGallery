import prismaClient from "../prisma";

interface CreateArtistProps{
    name: string,
    bio: string,
    birthYear: number,
    instagram: string,
    artId: String
}

export default class CreateArtistService{
    async execute({ name, bio, birthYear, instagram, artId }: CreateArtistProps){
        
        const Artist = await prismaClient.artist.create({
            data:{
                name,
                bio,
                birthYear,
                instagram,
                artId
            }
        });

        return Artist;
    };
}