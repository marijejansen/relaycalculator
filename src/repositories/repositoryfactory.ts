import searchRepository from "./search-repository"
import calculateRepository from './calculate-repository';

const repositories = {
    search: searchRepository,
    calculate: calculateRepository
};

export const RepositoryFactory = {
    get: (name: keyof typeof repositories) => repositories[name]
}
