import searchRepository from "./search-repository"

const repositories = {
    search: searchRepository
    // other repositories
};

export const RepositoryFactory = {
    get: (name: keyof typeof repositories) => repositories[name]
}
