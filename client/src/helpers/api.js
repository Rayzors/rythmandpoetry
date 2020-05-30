// import baseURL from '../env/jenesaispas's
const baseURL = process.env.REACT_APP_API_URL || 'https://rapapi.kevinmanssat.fr';
//const baseURL = 'http://54.190.49.146/api'

class Api {
  /**
   * Api helper to get data from API
   * @param {String} baseURL
   */
  constructor(baseURL) {
    this.hostname = baseURL;
  }

  /**
   * Private function that call api with an endpoint passed as parameter
   * @param {String} endpoint
   */
  async callApi(endpoint) {
    const request = this.hostname + endpoint;
    const options = {
      method: 'GET',
      mode: 'cors'
    };

    const response = await fetch(request, options);
    const json = await response.json();
    return json;
  }

  /**
   * Return all eras
   * Use await to call this function
   */
  async getEras() {
    let apiEras = await this.callApi('/era');
    apiEras = apiEras.filter((era) => Number(era.section_id) !== 0);
    return apiEras;
  }

  /**
   * Returns one Era
   * Use await to call this function
   * @param {Number} eraId the era ID
   */
  async getEraById(eraId) {
    return this.callApi(`/era/${eraId}`);
  }

  /**
   * Returns every artists
   * Use await to call this function
   */
  async getArtists() {
    return this.callApi('/artists');
  }

  /**
   * Returns one artists
   * Use await to call this function
   */
  async getArtistsById($id) {
    return this.callApi(`/artist/${$id}`);
  }

  /**
   * Returns every musics
   * Use await to call this function
   */
  async getMusics() {
    return this.callApi('/era/musics');
  }

  /**
   * Returns every content of an era
   * Use await to call this function
   * @param {Number} eraId the era ID
   */
  async getContentByEra(eraId) {
    return this.callApi(`/era/${eraId}/content`);
  }

  /**
   * Returns the content of an era by type
   * Use await to call this function
   * @param {Number} eraId the era ID
   * @param {String} type the type of the content
   */
  async getContentByType(eraId, type) {
    return this.callApi(`/era/${eraId}/content`);
  }

  /**
   * Returns every artist of an era
   * Use await to call this function
   * @param {Number} eraId the era ID
   */
  async getArtistByEra(eraId) {
    return this.callApi(`/era/${eraId}/artists`);
  }

  /**
   * Returns every musics of an era
   * Use await to call this function
   * @param {Number} eraId the era ID
   */
  async getMusicsByEra(eraId) {
    return this.callApi(`/era/${eraId}/musics`);
  }

  /**
   * Returns every playlist of an era
   * Use await to call this function
   * @param {Number} eraId the era ID
   */
  async getPlaylistByEra(eraId) {
    return this.callApi(`/era/${eraId}/playlist`);
  }
}

const rapApi = new Api(baseURL);
export default rapApi;
