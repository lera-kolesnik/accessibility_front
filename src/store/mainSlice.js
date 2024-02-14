import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
  status: 'awaiting',
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    urlCheckPending(state, action) {
      state.status = 'loading'
    },
    urlCheckSuccessfull(state, actions) {
      state.status = 'successfull'
      state.data = actions.payload
    },
    urlCheckError(state, action) {
      state.status = 'error'
    },
  },
})

export const { urlCheckError, urlCheckPending, urlCheckSuccessfull } =
  mainSlice.actions

export const checkUrl = (url) => async (dispatch) => {
  dispatch(urlCheckPending())
  try {
    const resp = await fetch(`http://localhost:4000/api/check?url=${url}`)
    const data = await resp.json()
    dispatch(urlCheckSuccessfull(data))
    console.log(data)
  } catch (e) {
    dispatch(urlCheckError())
  }
}

export default mainSlice.reducer
