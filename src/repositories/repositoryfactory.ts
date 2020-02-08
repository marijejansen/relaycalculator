import searchRepository from "./search-repository"
import baseRepository from './base-repository';

const repositories = {
    search: searchRepository
    // other repositories
};

export const RepositoryFactory = {
    get: (name: keyof typeof repositories) => repositories[name]
}
