import { FastifyRequest, FastifyReply } from "fastify";
import prismaClient from "../prisma";

interface DeleteArtProps{
    id: string;
}

export default class DeleteArtService{
    async execute({ id }: DeleteArtProps){

        if(!id){
            throw new Error("Solicitação invalida!");
        }

        const findArt = await prismaClient.art.findFirst({
            where:{
                id: id
            }
        });

        if(!findArt){
            throw new Error("Arte não encontrado!");
        }

        await prismaClient.art.delete({
            where:{
                id: findArt.id
            }
        });

        return {message: "Deletado com sucesso!"}

    } 
}