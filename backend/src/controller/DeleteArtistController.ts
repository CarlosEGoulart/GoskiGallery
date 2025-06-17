import { FastifyRequest, FastifyReply } from "fastify";
import DeleteArtistService from "../services/DeleteArtistService";


export default class DeleteArtistController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const{ id } = request.query as {id: string}
 
        const deleteArtistService = new DeleteArtistService();

        const Artist = await deleteArtistService.execute({ id });

        reply.send(Artist);
    }   
}