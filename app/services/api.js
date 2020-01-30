// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import base64 from 'base-64'
import md5 from 'md5'
import { format } from 'date-fns'

// our "constructor"
const create = (baseURL = process.env.BASE_URL) => {

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
    const cnpjDaEmpresa = '77610743000108';
    const formattedDate = format(new Date(), 'dd/MM/yyyy')

    const identify = `${cnpjDaEmpresa}@Request_Token_AUTORIZED_PLANETOOH_api&${formattedDate}`
    const identifyMD5 = md5(identify)
    const identifyUpperCase = identifyMD5.toUpperCase()

    const identifyBase64 = base64.encode(identifyUpperCase)
    const requestBase64 = base64.encode(request)

    console.log(`${request} -----------------------`)
    console.log(`MD5: ${identifyUpperCase}`)
    console.log(`Date: ${formattedDate}`)
    console.log(`Raw request: ${identify}/${request}`)
    console.log(`MD5 request: ${identifyMD5}/${request}`)
    console.log(`All request: ${identifyBase64}/${requestBase64}`)
    
    return api.get('', { p: `${identifyBase64}/${requestBase64}` })
  }

  const getUF = () => {
    return apiRequest(`GetUF`)
  }

  const getCidades = () => {
    return apiRequest(`GetListarCidades`)
  }

  const getListaMidias = () => {
    return apiRequest(`GetListaMidias`)
  }

  const getListPoi = () => {
    return apiRequest(`GetListPoi`)
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
    getListaMidias,
    getListPoi,
    getListarTiposMidiaFromUF,
    getListarTiposMidiaFromCidade,
    getListarTiposMidiaFromBairro,
    getUF,
  }
}

/* ------------- API ------------- */

export default create()
