import prismaClient from "../prisma";

export default class ListArtService{
    async execute(){
        const art = await prismaClient.art.findMany();

        return art;
    }
    
}