

var chai = require( 'chai' );

var expect = chai.expect;  //this is so you dont have to say chai.expect each time.
var should = chai.should();

var Human = require( '../human.js' );

describe( 'Human Class', function (){

  var human = Human;
  var nakaz;

  beforeEach( function (){
    nakaz = new Human( 'Nakaz' );
  } );

  it( 'should be a function', function (){
    expect( human ).to.be.a( 'function' );
  } );

  it( 'should have property name', function() {
    expect( nakaz.name ).to.equal( 'Nakaz' );
    expect( nakaz.name ).to.not.equal( 'Jason' );
  } );

  it( 'should have method sayName', function (){
    expect( nakaz.sayName() ).to.equal( 'Nakaz' );
    expect( nakaz.sayName ).to.be.a( 'function' );
  } );


} );
