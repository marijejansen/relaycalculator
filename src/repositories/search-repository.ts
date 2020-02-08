import baseRepository from "./base-repository"
import { Swimmer } from '@/models/swimmer'

export default{
    async getSearch(firstName: string, lastName: string): Promise<Swimmer[]> {
        return baseRepository.get(`/SwimmerData/searchSwimmers?firstName=${firstName}&lastName=${lastName}`)
    }
}