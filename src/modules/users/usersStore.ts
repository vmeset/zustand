import { create } from 'zustand'

export interface IUser {
    id: number;
    username: string;
}

export interface IUsersStore {
  users: IUser[],
  // error: String,
  addUser: (username: string) => void
}

export const useUsersStore = create<IUsersStore>((set) => ({
  users: [
    {id:1, username: 'us'},
    {id:11, username: 'usa'}
  ],
  addUser: (username: string) => set((state) => (
    {
      users: [
        ...state.users,
        {
          id: Date.now(),
          username
        }
      ]
    }
  ))
}))