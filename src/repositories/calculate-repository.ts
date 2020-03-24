import baseRepository from "./base-repository"
import { CalculationRequest } from '@/models/calculation-request';
import { RelayTeam } from '@/models/relay-team';

export default{

    async getBestTeams(calculationRequest: CalculationRequest): Promise<RelayTeam[]> {
        return baseRepository.post(`/Calculation/getBestTeams`, calculationRequest).then(response => {
            return response.data
        });
    },
}