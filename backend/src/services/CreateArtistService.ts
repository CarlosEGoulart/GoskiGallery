import prismaClient from "../prisma";

interface CreateArtistProps{
    name: string,
    bio: string,
    birthYear: number,
    instagram: string,
}

export default class CreateArtistService{
    async execute({ name, bio, birthYear, instagram}: CreateArtistProps){
        
        if(!name || !bio || !birthYear || !instagram){
            throw new Error("Solicitação invalida!");
        }


        const Artist = await prismaClient.artist.create({
            data:{
                name,
                bio,
                birthYear,
                instagram
            }
        });

        return Artist;
    };
}