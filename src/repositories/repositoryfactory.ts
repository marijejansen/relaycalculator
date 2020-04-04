import searchRepository from "./search-repository";
import calculateRepository from "./calculate-repository";
import localStorageRepository from './storage-repository';

const repositories = {
  search: searchRepository,
  calculate: calculateRepository,
  localStorageRepo: localStorageRepository
};

export const RepositoryFactory = {
  get: (name: keyof typeof repositories) => repositories[name]
};
