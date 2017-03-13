/**
 * File name: CommentServices.js
 * Authors: Kevan Yang, Elliot Yoon
 * Description: Manages comments on an event.
 */

angular.module('models')
  .factory('CommentServices', ['$q',
    function($q) {
      return {

        // adds a comment to an event 
        addComment: function(eventUid, userUid, message, timeStamp) {
          var deferred = $q.defer();

          var eventCommentsRef = firebase.database().ref().child('eventComments/' + eventUid);
          eventCommentsRef.push({
            'userUid': userUid,
            'timeStamp': timeStamp,
            'message': message
          }).then(function() {
            console.log('Added comment ' + message + ' on event ' + eventUid);
            deferred.resolve();
          });

          return deferred.promise;
        }
      }
    }
  ]);