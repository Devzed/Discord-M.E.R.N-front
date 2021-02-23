import { createSlice } from '@reduxjs/toolkit'


const appSlice = createSlice({
    name: 'app',
    
    initialState: {
        channelId: null,
        channelName: null
    },

    reducers: {
        setChannelId: (state, action) => {

        }
    }
});

export const { setChannelId } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;