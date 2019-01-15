// import apiHostName from '../env/jenesaispas'
const apiHostName = 'http://localhost:3001'

class Api {
  /**
   * Api helper to get data from API
   * @param {String} apiHostName 
   */
  constructor( apiHostName ) {
    this.hostname = apiHostName
  }

  /**
   * Private function that call api with an endpoint passed as parameter
   * @param {String} endpoint 
   */
  async callApi( endpoint ) {
    const request = this.hostname + endpoint
    const response = await fetch( request )
    const json = await response.json()
    return json
  }

  async getEras() {
    return this.callApi( '/era' )
  }

  async getEraById( id ) {
    return this.callApi( `/era/${ id }` )
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

const rapApi = new Api(  apiHostName  )
export default rapApi