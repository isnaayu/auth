import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import ApiInstance from "../../api/ApiInstance";


export const fetchAdmin = createAsyncThunk('admin/fetchAdmin',async () =>{
    // const dispatch = useDispatch()
    const response = await ApiInstance.get("/admins");
    // dispatch(setAdmin(response.data.data))
    console.log("adminsss"+response.data.data.service)
    setAdmin(response.data.data)
    return response.data.data
})

export const addAdmin = createAsyncThunk('admin/addAdmin',async (admin,{dispatch})=>{
    await ApiInstance.post('api/auth/register-admin',admin)
        .catch((e)=>console.log(e))
        dispatch(fetchAdmin())
})

export const updateAdmin = createAsyncThunk('admin/updateAdmin',async (admin,{dispatch}) => {
    ApiInstance.put("/admins",admin)
    console.log(admin);
    dispatch(fetchAdmin())
})

const initialState = {
    username: '',
    password: '',
    authenticate: false,
    role: '',
    user: [],
    admins: [],
    userLogin: []
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setAuthenticate: (state, action) => {
            state.authenticate = action.payload
            console.log("slice"+state.authenticate)
        },
        setRole: (state, action) => {
            state.role = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setAdmin: (state, action) => {
            state.admins = action.payload
        },
        setUserLogin: (state, action) => {
            state.userLogin = action.payload
        },
        updateAdminById: (state, action) => {
            state.admins = state.admins.map((user) => {
                if (user.id === action.payload.id) {
                    return action.payload
                } else {
                    return user
                }
            })
            if (!Array.isArray(state.admins)) {
                state.admins = [];
            }
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(fetchAdmin.fulfilled,(state,action)=>{
                state.admins = action.payload
            })
            
    }
})

export const { setUsername, setPassword, setAuthenticate, setRole, setUser, setAdmin, setUserLogin, updateAdminById } = usersSlice.actions
export default usersSlice.reducer