export const REQUEST_CHANNELS = 'REQUEST_CHANNELS'
export const requestChannels = () => ({
  type: REQUEST_CHANNELS,
})

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS'
export const receiveChannels = (json) => ({
  type: RECEIVE_CHANNELS,
  channels: json,
  receivedAt: Date.now()
})

export const SEARCH_CHANNELS = 'SEARCH_CHANNELS'
export const searchChannels = (search) => ({
  type: SEARCH_CHANNELS,
  search,
})

export const SET_LOCATION = 'SET_LOCATION'
export const setLocation = (location) => ({
  type: SET_LOCATION,
  location,
})

export const SET_SEARCH = 'SET_SEARCH'
export const setSearch = (search) => ({
  type: SET_SEARCH,
  search,
})

export const fetchChannels = () => (dispatch, getState) => {
  if(getState().channels.visibleChannelIds <= 0) {
    dispatch(requestChannels())
    return fetch(`http://www.eternityready.com:3000/api/channels/all`,
      {mode:"cors"})
      .then(response => response.json())
      .then(json => dispatch(receiveChannels(json)))
    }
}

