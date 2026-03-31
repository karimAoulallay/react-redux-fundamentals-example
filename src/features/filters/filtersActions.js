export const statusFilterChanged = (status) => ({
  type: 'filters/statusFilterChanged',
  payload: status,
})

export const colorFilterChanged = ({ color, changeType }) => ({
  type: 'filters/colorFilterChanged',
  payload: { color, changeType },
})
