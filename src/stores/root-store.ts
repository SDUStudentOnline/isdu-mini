import { UiStore } from './ui-store';

export class RootStore {
  uiStore: UiStore;

  constructor() {
    this.uiStore = new UiStore();
  }
}
