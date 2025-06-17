import { FastifyRequest, FastifyReply } from "fastify";
import DeleteArtService from "../services/DeleteArtService";


export default class DeleteArtController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const{ id } = request.query as {id: string}
 
        const deleteArtService = new DeleteArtService();

        const Art = await deleteArtService.execute({ id });

        reply.send(Art);
    }   
}