import create from 'zustand';

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setGameQuery: (gameQuery: GameQuery) => void;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameStore = create<GameQueryStore>((set) => ({
    gameQuery: {},
    setGameQuery: (gameQuery: GameQuery) => set({ gameQuery }),
    setSearchText: (searchText: string) => set(() => ({ gameQuery: { searchText } })),
    setGenreId: (genreId: number) => set(store => ({ gameQuery: { ...store.gameQuery, genreId } })),
    setPlatformId: (platformId: number) => set(store => ({ gameQuery: { ...store.gameQuery, platformId } })),
    setSortOrder: (sortOrder: string) => set(store => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameStore;