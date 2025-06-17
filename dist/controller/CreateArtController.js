"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateArtService_1 = __importDefault(require("../services/CreateArtService"));
class CreateArtController {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, year, imageUrl, artistId } = request.body;
            const ArtService = new CreateArtService_1.default();
            const Art = yield ArtService.execute({ title, description, year, imageUrl, artistId });
            reply.send(Art);
        });
    }
    ;
}
exports.default = CreateArtController;
