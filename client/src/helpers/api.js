// import baseURL from '../env/jenesaispas'
const baseURL = 'http://localhost:3001'

class Api {
  /**
   * Api helper to get data from API
   * @param {String} baseURL 
   */
  constructor( baseURL ) {
    this.hostname = baseURL
  }

  /**
   * Private function that call api with an endpoint passed as parameter
   * @param {String} endpoint 
   */
  async callApi( endpoint ) {
    const request = this.hostname + endpoint
    const options = {
      method: 'GET',
      mode: 'no-cors'
    }
    const response = await fetch( request , options )
    const json = await response.json()
    return json
  }

  async getEras() {
    return this.callApi( '/era' )
  }

  async getEraById( eraId ) {
    return this.callApi( `/era/${ eraId }` )
  }

  async getArtists() {
    return this.callApi( '/era/artists' )
  }

  async getMusics() {
    return this.callApi( '/era/musics' )
  }

  async getContentByEra( eraId ) {
    return this.callApi( `/era/${ eraId }/content` )
  }

  async getArtistByEra( eraId ) {
    return this.callApi( `/era/${ eraId }/artists` )
  }

  async getMusicByEra( eraId ) {
    return this.callApi( `/era/${ eraId }/musics` )
  }

}

const rapApi = new Api( baseURL )
export default rapApi