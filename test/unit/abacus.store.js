module('Store');
test('Test that the Abacus.store and its methods exists', 5, function() {
  ok( Abacus.store, 'Abacus.store exists' );
  ok( Abacus.store.create, 'Abacus.store.create exists' );
  ok( Abacus.store.read, 'Abacus.store.read exists' );
  ok( Abacus.store.update, 'Abacus.store.update exists' );
  ok( Abacus.store.destroy, 'Abacus.store.destroy exists' );
});

test('Abacus.store.create', 3, function() {

  Abacus.store.create( 'asd', {name: 'boaz'} );

  equal( Abacus.store.read( 'asd' ).name, 'boaz', 'Abacus.store.read returns a property from the target object correctly' );
  equal( Abacus.store.update( 'asd', { age: 25 } ).read('asd').age, 25, 'Abacus.store.update adds a property to the target object correctly' );
  equal( Abacus.store.destroy( 'asd' ).read( 'asd' ), undefined , 'Abacus.store.destroy removes the target object from the cache' );

});