import { FastifyRequest, FastifyReply } from "fastify";
import prismaClient from "../prisma";

interface DeleteArtistProps{
    id: string;
}

export default class DeleteArtService{
    async execute({ id }: DeleteArtistProps){

        if(!id){
            throw new Error("Solicitação invalida!");
        }

        const findArtist = await prismaClient.artist.findFirst({
            where:{
                id: id
            }
        });

        if(!findArtist){
            throw new Error("Artista não encontrado!");
        }

        await prismaClient.artist.delete({
            where:{
                id: findArtist.id
            }
        });

        return {message: "Deletado com sucesso!"}

    }   
}