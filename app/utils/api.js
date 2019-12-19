// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import base64 from 'base-64'
const __DEV__ = true

// our "constructor"
const create = (baseURL = process.env.API_SERVER) => {

  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 40 second timeout...
    timeout: 40000
  })

  const setToken = (token) => 
    api.setHeader('Authorization', `Bearer ${token}`)
  const getToken = (email, password) => 
    api.post('api/accounts/token', { email, password }, { 
      headers: { 
        Authorization: `Basic ${base64.encode(`${email}:${password}`)}` 
      } 
    })

  const apiRequest = (request) => {
    const identify = `${CNPJ_DA_EMPRESA}@Request_Token_AUTORIZED_PLANETOOH_api&19/12/2019`
    return api.get(base64.encode(`${identify}${request}`))
  }

  const getUF = () => {
    return apiRequest(`GetUF`)
  }

  const getCidades = () => {
    return apiRequest(`GetCidades/UF`)
  }

  const getMedias = () => {
    return apiRequest(`GetMidias/UF/CIDADE`)
  }

  const getMediasFromBairro = () => {
    return apiRequest(`GetMidias/UF/CIDADE/BAIRRO`)
  }

  const getListarCidades = () => {
    return apiRequest(`GetListarCidades/PARTE_DO_PARAMETRO`)
  }

  const getTiposMidia = () => {
    return apiRequest(`GetTiposMidia`)
  }

  const getListarTiposMidiaFromUF = () => {
    return apiRequest(`GetListTiposMidia/TIPO/UF`)
  }

  const getListarTiposMidiaFromCidade = () => {
    return apiRequest(`GetListTiposMidia/TIPO/UF/CIDADE`)
  }

  const getListarTiposMidiaFromBairro = () => {
    return apiRequest(`GetListTiposMidia/TIPO/UF/CIDADE/BAIRRO`)
  }

  return {
    // a list of the API functions from step 2
    setToken,
    getToken,

    getCidades,
    getListarCidades,
    getMedias,
    getMediasFromBairro,
    getTiposMidia,
    getListarTiposMidiaFromUF,
    getListarTiposMidiaFromCidade,
    getListarTiposMidiaFromBairro,
    getUF,
  }
}

/* ------------- API ------------- */

export default create()
