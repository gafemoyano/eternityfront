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


export const fetchChannels = () => dispatch => {
  dispatch(requestChannels())
  return fetch(`http://www.eternityready.com:3000/api/channels/all`,
    {mode:"cors"})
    .then(response => response.json())
    .then(json => dispatch(receiveChannels(json)))
}
