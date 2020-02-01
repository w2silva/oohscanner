
const setToken = (token) => {}
const getToken = {}

const getUF = () => {
  return {
    ok: true,
    data: {}
  }
}

const getListaMidias = () => {
  return {
    ok: true,
    data: require('../fixtures/medias.js')
  }
}

const getListPoi = () => {
  return {
    ok: true,
    data: require('../fixtures/poi.js')
  }
}

const getMedias = () => {
  return {
    ok: true,
    data: {}
  }
}

const getMediasFromBairro = () => {
  return {
    ok: true,
    data: {}
  }
}

const getListarCidades = () => {
  return {
    ok: true,
    data: require('../fixtures/ListCities.js')
  }
}

const getCidades = () => {
  return {
    ok: true,
    data: require('../fixtures/cities.js')
  }
}

const getTiposMidia = () => {
  return {
    ok: true,
    data: require('../fixtures/media_types.js')
  }
}

const getListarTiposMidiaFromUF = () => {
  return {
    ok: true,
    data: {}
  }
}

const getListarTiposMidiaFromCidade = () => {
  return {
    ok: true,
    data: {}
  }
}

const getListarTiposMidiaFromBairro = () => {
  return {
    ok: true,
    data: {}
  }
}

const setCliente = () => {
  return {
    ok: true,
    data: {
      ID: '123456',
    }
  }
}

export default {
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
  setCliente
}