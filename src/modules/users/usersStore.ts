import { create } from 'zustand'

export interface IUser {
    id: number;
    username: string;
}

export interface IUsersStore {
  users: IUser[],
  addUser: (username: string) => void
  fetchUsers: () => void
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
  )),
  fetchUsers: async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await result.json() as IUser[]
    set({users: json})
  }
}))