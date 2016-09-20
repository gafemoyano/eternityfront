export const HOVER_TIMER = 'HOVER_TIMER'
export const requestChannels = () => ({
  type: HOVER_TIMER,
})

export const ITEM_MOUSE_ENTER = 'ITEM_MOUSE_ENTER'
export const hoverItem = (isTouch, index) => ({
  type: ITEM_MOUSE_ENTER,
  isTouch,
  index,
})


export const ITEM_MOUSE_OUT = 'ITEM_MOUSE_OUT'
export const mouseOutItem = () => ({
  type: ITEM_MOUSE_OUT,
})

export const UPDATE_VISIBLE_COLUMNS = 'UPDATE_VISIBLE_COLUMNS'
export const updateVisibleColumns = (windowSize) => ({
  type: ITEM_MOUSE_OUT,
  windowSize,
})

export const ACTIVATE_ITEM = 'ACTIVATE_ITEM'
export const activateItem = (index, _id) => ({
  type: ACTIVATE_ITEM,
  index,
  _id,
})

export const DEACTIVATE_ITEMS = 'DEACTIVATE_ITEMS'
export const deactivateItems = () => ({
  type: DEACTIVATE_ITEMS,
})
