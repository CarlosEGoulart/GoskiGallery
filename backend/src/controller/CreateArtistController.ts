import { FastifyRequest, FastifyReply } from "fastify";
import CreateArtistService from "../services/CreateArtistService";

export default class CreateArtistController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        
        const{name, bio, birthYear, instagram} = request.body as {name: string, bio: string, birthYear: number, instagram: string};
        
        const ArtistService = new CreateArtistService();

        const Artist = await ArtistService.execute({name, bio, birthYear, instagram});

        reply.send(Artist);

    
    }
}