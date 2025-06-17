import prismaClient from "../prisma";

export default class ListArtistService{
    async execute(){
        const artist = await prismaClient.artist.findMany();

        return artist;
    }
    
}