import axios from 'axios'
import * as SERVERPATH from './serverConfig'

export default (apiName, post) =>
  new Promise((resolve, reject) => {
    let defaultVar = false
    if (apiName) {
      defaultVar = true
    }
    if (defaultVar) {
      const URL = SERVERPATH.serverPath + apiName
      axios({
        method: 'POST',
        url: URL,
        data: post,
        Accept: 'application/json',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: 'fd559f719645be483bc941f7ef3ab5be',
        },
      })
        .then(response => {
          const res = response.data
          // update condition here based on backend response
          let status = true
          if (res.status) {
            status = true
          }
          if (status) {
            const setRes = {
              message: res.message || '',
              status: res.status || '',
              data: res.result || res,
            }
            resolve(setRes)
          } else {
            const setRes = {
              message: res.message,
              status: res.status,
              data: null,
            }
            reject(setRes)
          }
        })
        .catch(err => {
          reject(err)
        })
    } else {
      console.error(
        'No internet connection',
        'Make sure Wifi or cellular data is connected, then try again',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      )
      const setRes = {
        message: 'Network is not available',
        status: -1,
        data: null,
      }
      reject(setRes)
      // reject('Network is not available');
    }
  })
