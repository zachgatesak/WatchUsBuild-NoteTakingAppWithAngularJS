angularmodule('NoteWrangler').factory('Note', function($resource){
  return $resouce('/notes/:id');

});
