import { FastifyRequest, FastifyReply } from "fastify";
import CreateArtService from "../services/CreateArtService";

export default class CreateArtController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { title, description, year, imageUrl, artistId } = request.body as {
            title: string,
            description: string,
            year: number,
            imageUrl: string,
            artistId: string
        };
        const ArtService = new CreateArtService();
        const Art = await ArtService.execute({ title, description, year, imageUrl, artistId });
        reply.send(Art);
    };
}