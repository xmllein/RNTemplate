import {create} from 'zustand';

// 延时1s
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

interface State {
  count: number;
  increment: () => void;
  decrement: () => void;
  // 模拟异步
  incrementAsync: () => Promise<void>;
  decrementAsync: () => Promise<void>;
}

export const useStore = create<State>((set, get) => ({
  count: 0,
  increment: () => set(state => ({count: state.count + 1})),
  decrement: () => set(state => ({count: state.count - 1})),
  // 模拟异步
  incrementAsync: async () => {
    await delay(1000);
    get().increment();
  },
  decrementAsync: async () => {
    await delay(1000);
    get().decrement();
  },
}));
