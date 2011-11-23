(function( window, Abacus ) {

  // Local cache for Abacus
  var
  localStorage = window.localStorage,

  cache = {},

  local = {
    read: function() {
      var stored = localStorage.getItem( 'Abacus' );

      if ( !stored ) {
        stored = local.write({});
      }

      return JSON.parse( localStorage.getItem( 'Abacus' ) );
    },
    write: function( object ) {
      var data = Abacus.extend( cache, object );

      localStorage.setItem( 'Abacus', JSON.stringify( data ) );

      cache = data;

      return data;
    }
  };

  // Abacus store API for storing arbitrary objects
  // Store defaults to using localStorage
  // Overwrite these methods to introduce your own persistance layer
  // TODO: introduce strategy for different Abacus entities to persist
  // at different endpoints


  Abacus.store = {
    create: function( id, value ) {
      var temp = {};

      temp[ id ] = value;

      local.write( temp );

      return this;
    },
    read: function( id ) {
      var stored = local.read();

      return id != null ? stored[ id ] : stored;
    },
    destroy: function( id ){
      delete cache[ id ];

      local.write( cache );
      return this;
    }
  };

  Abacus.store.update = Abacus.store.create;

})( this, this.Abacus );