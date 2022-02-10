import apiCall from './axiosApiCall'
import {apiName} from './serverConfig'

// ///////// Check Version Api ////////////////////////
export const checkVersionAPI = async payload => {
  try {
    const resultObject = await apiCall(apiName.checkVersionAPI, payload)
    return resultObject
  } catch (err) {
    return err
  }
}

export const getmessageAPI = async payload => {
  try {
    const resultObject = await apiCall(apiName.checkVersionAPI, payload)
    return resultObject
  } catch (err) {
    return err
  }
}
