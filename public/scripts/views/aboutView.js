'use strict';

(function(module) {
  const aboutView = {};

  const ui = () => {
    let $about - $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  aboutView.index = () => {
    ui();
    $('#about ul').append(
      repos.with('name'.map(render)
    );
  };

  module.aboutView = aboutView;
})(window);
