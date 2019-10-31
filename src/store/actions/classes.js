import { FETCH_CLASSES } from "store/constants";


export const fetchClasses = (data) => ({
  type: FETCH_CLASSES,
  payload: data
})
