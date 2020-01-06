import axios from 'axios'

import config from '../config/default.json'

function handleResponse(response) {
  console.log('Response:')
  return response
}

function handleError(error) {
  console.log('Error:')
  const {
    status,
    // data
  } = error.response
  // const { message } = data
  switch (status) {
    case 401:
      // alert(`401: ${message}`)
      // do something when you're unauthenticated
      break
    case 403:
      // alert('403')
      // do something when you're unauthorized to access a resource
      break
    case 500:
      // alert('401')
      // do something when your server exploded
      break
    default:
      // alert('default error')
      // handle normal errors with some alert or whatever
  }
  return error.response
}

const getHeaders = () => {
  return {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };
};

const SERVER_DOMAIN = `${config.baseUrl}/${config.apiVersion}`

const axioz = (method, path, data={}) => {
  console.log('Request URL')
  console.log(`${method}: ${SERVER_DOMAIN + path}`)

  return new Promise((resolve, reject) => {
    if (method === 'delete') {
      let finalHeaders = data.headers ? {...getHeaders().headers, ...data.headers} : getHeaders().headers
      let finalData = data.data

      console.log('Request Headers')
      console.log(finalHeaders)
      console.log('Request Data')
      console.log(finalData)

      axios.delete(`${SERVER_DOMAIN}${path}`, {
          headers: finalHeaders,
          data: data.data
        })
        .then(response => { resolve(handleResponse(response)) })
        .catch(error => { reject(handleError(error)) })
    } else if (method === 'get') {
      let finalHeaders = getHeaders()
      let finalData = data
      if (data.headers) {
        finalHeaders.headers = {...finalHeaders.headers, ...data.headers}
        delete finalData['headers']
      }

      console.log('Request Headers')
      console.log(finalHeaders.headers)
      console.log('Request Data')
      console.log(finalData)

      axios.get(`${SERVER_DOMAIN}${path}`, {
          ...finalData,
          headers: finalHeaders.headers
        })
        .then(response => { resolve(handleResponse(response)) })
        .catch(error => { reject(handleError(error)) })
    } else {
      let finalHeaders = getHeaders()
      let finalData = data
      if (data.headers) {
        finalHeaders.headers = {...finalHeaders.headers, ...data.headers}
        delete finalData['headers']
      }

      console.log('Request Headers')
      console.log(finalHeaders.headers)
      console.log('Request Data')
      console.log(finalData)

      if (finalData.formData) {
        axios[method](`${SERVER_DOMAIN}${path}`, finalData.formData, finalHeaders)
        .then(response => { resolve(handleResponse(response)) })
        .catch(error => { reject(handleError(error)) })
      } else {
        axios[method](`${SERVER_DOMAIN}${path}`, finalData, finalHeaders)
        .then(response => { resolve(handleResponse(response)) })
        .catch(error => { reject(handleError(error)) })
      }
    }
  })
}

export default axioz






// NOTE: USING THIS COMPONENT IN A FUNCTIION RETURNING THE RESPONSE OR ERROR

// SAMPLE GET REQUEST
// GET - Auto Suggest Address
axioz('get', `/address/auto_suggest`, {
  params: {
    q: event.target.value
  }
})
.then(response => {
  console.log(response)
})
.catch(err => {
  console.log(err)
})

// SAMPLE POST REQUEST
// POST - Create Session
axioz('post', `/users/session`, {
  mobile_number: values.mobile,
  password: values.password
})
.then(response => {
  console.log(response)
})
.catch(err => {
  console.log(err)
})

// SAMPLE DELETE REQUEST
// DELETE - OTP Verify - Generate Session
axioz('delete', '/users/session/otp', {
  headers: {
    'Accept': 'application/jwt',
  },
  data: {
    mobile_number: values.mobile,
    otp: otp
  }
})
.then(response => {
  console.log(response)
})
.catch(err => {
  console.log(err)
})