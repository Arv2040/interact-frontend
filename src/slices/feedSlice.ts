import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export interface FeedState {
  unreadNotifications: number;
  unreadInvitations: number;
  navbarOpen: boolean;
  homeTab: number;
  exploreTab: number;
}

const initialState: FeedState = {
  unreadNotifications: 0,
  unreadInvitations: 0,
  navbarOpen: true,
  homeTab: 0,
  exploreTab: 0,
};

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setNavbarOpen: (state, action: PayloadAction<boolean>) => {
      state.navbarOpen = action.payload;
    },
    setHomeTab: (state, action: PayloadAction<number>) => {
      state.homeTab = action.payload;
    },
    setExploreTab: (state, action: PayloadAction<number>) => {
      state.exploreTab = action.payload;
    },
    setUnreadNotifications: (state, action: PayloadAction<number>) => {
      state.unreadNotifications = action.payload;
    },
    incrementUnreadNotifications: state => {
      state.unreadNotifications = state.unreadNotifications + 1;
    },
    setUnreadInvitations: (state, action: PayloadAction<number>) => {
      state.unreadInvitations = action.payload;
    },
    incrementUnreadInvitations: state => {
      state.unreadInvitations = state.unreadInvitations + 1;
    },
  },
});

export const {
  setNavbarOpen,
  setHomeTab,
  setExploreTab,
  setUnreadNotifications,
  incrementUnreadNotifications,
  setUnreadInvitations,
  incrementUnreadInvitations,
} = feedSlice.actions;

export default feedSlice.reducer;

export const navbarOpenSelector = (state: RootState) => state.feed.navbarOpen;
export const homeTabSelector = (state: RootState) => state.feed.homeTab;
export const exploreTabSelector = (state: RootState) => state.feed.exploreTab;
export const unreadNotificationsSelector = (state: RootState) => state.feed.unreadNotifications;
export const unreadInvitationsSelector = (state: RootState) => state.feed.unreadInvitations;
