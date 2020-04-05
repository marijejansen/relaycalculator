import { Swimmer } from '@/models/swimmer';

export default {
  async getAllFromLocalStorage(): Promise<Swimmer[]> {
    const swimmersStorage = localStorage.getItem("swimmers");
    return swimmersStorage ? JSON.parse(swimmersStorage) : Array();
  },

  async getFromLocalStorageById(id: number): Promise<Swimmer | null> {
    var swimmers = await this.getAllFromLocalStorage();
    return swimmers.find((sw: Swimmer) => sw.id == id) || null;
  },

  async storeInLocalStorage(swimmers: Swimmer[]): Promise<void> {
    localStorage.setItem("swimmers", JSON.stringify(swimmers));
  },

  async addOrUpdateInLocalStorage(swimmer: Swimmer): Promise<void> {
    var swimmers = await this.getAllFromLocalStorage();
    var index = swimmers.findIndex(sw => sw.id == swimmer.id);
      if (index != -1) {
        swimmers[index] = swimmer;
      } else {
        swimmers.push(swimmer);
      }
      this.storeInLocalStorage(swimmers);
  }
}