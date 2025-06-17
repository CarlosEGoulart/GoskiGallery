import { FastifyRequest, FastifyReply } from "fastify";
import CreateArtistService from "../services/CreateArtistService";

export default class CreateArtistController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        
        const{name, bio, birthYear, instagram, artId} = request.body as {id: String, name: string, bio: string, birthYear: number, instagram: string, artId: String};
        
        const ArtistService = new CreateArtistService();

        const Artist = await ArtistService.execute({name, bio, birthYear, instagram, artId});

        reply.send(Artist);

    
    }
}