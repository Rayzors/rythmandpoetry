class storage {
 
    constructor( key ) {
        this.key = key
        this.init()
    }

    init() {
        if( !localStorage.getItem( this.key ) ) {
            const template = {
                unlockedArtist: []
            }
            localStorage.setItem( this.key, JSON.stringify( template ) )
        }
    }

    /**
     * Private method to get game localStorage
     */
    getStorage() {
        return JSON.parse( localStorage.getItem( this.key ) )
    }

    /**
     * Private method to set localStorage with an object
     * @param {Object} obj 
     */
    setStorage( obj ) { 
        localStorage.setItem( this.key, JSON.stringify( obj ) )
    }

    setItem( key, value ) {
        const previousStorage = this.getStorage()
        previousStorage[key] = value
        this.setStorage( previousStorage )
    }

    
    getItem( key ) {
        const storage = this.getStorage()
        return storage[key]
    }

    clearGame() {
        localStorage.removeItem( this.key )
        this.init()
    }

}
let rapStorage = new storage( 'rapStorage' )
export default rapStorage