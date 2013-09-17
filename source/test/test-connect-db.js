/**
 * Basic-Test f. Mongo-DB.
 * Tests the connection to DB.
 *
 * @author: A. Siebert, ask@touchableheroes.com
 */

// var mongoose = require('mongoose');
// var connection = require( "../impl/db/connect.js" );

var dbURI    = 'mongodb://localhost/restAPP';
var dbConfigPrefix = __dirname + "/../config/database";

var api = require( "../index.js" );


describe( 'database-check', function() {

    var dbFacade = api.db(dbURI, dbConfigPrefix);

    before(function(done) {
        dbFacade.connect( function(connection) {
             done();
        } );
    });

    describe('Hello.Schema exists', function() {
       console.log( "-- test ready" );


       it('should get a 200 response', function(done) {
           console.log( "-- connect database" );

           var Hello = dbFacade.schema( "hello" );


           done();
        });
    });

});