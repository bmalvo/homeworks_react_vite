import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type IpState = {

    value: string;
    loading: boolean;
    error: string;
}

const initialState: IpState = {

    value: '',
    loading: false,
    error: '',
}

export const fetchIpAddress = createAsyncThunk <
    { ip: string },
    void,
    {rejectValue: string}
    >(

    'ip/fetchIpAddress',
    async (_, {rejectWithValue}) => {
        
        try {

          const response = await fetch('https://api.ipify.org?fformat=json');
          
          if (response.status === 200) {

            return rejectWithValue('specific error')
          }

            return await response.json();
        } catch (e) {
            return rejectWithValue('Error specificaly');
        }
    }
)

export const ipSlice = createSlice({

    name: 'ip',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchIpAddress.pending, state => {

          state.loading = true;
          state.error = '';
          state.value = '';
        })
        builder.addCase(fetchIpAddress.rejected, (state, action) => {
            
            state.loading = false;
          if (action.payload) {  
            state.error = action.payload;
          } else {
            state.error = "error occur"
          }
        })
        builder.addCase(fetchIpAddress.fulfilled, (state, action) => {

            state.loading = false;
            state.value = action.payload.ip
        })
    }
})

export const ipReducer = ipSlice.reducer;