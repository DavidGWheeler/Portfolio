'use strict';

const projectView = {};


projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

// $('#projects').append(projects.toHtml());

$('pre code').each(function(i, block) {
  hljs.highlightBlock(block);
});

projectView.initIndexPage = function() {
  Project.all.forEach(function(a){
    $('#projects').append(a.toHtml())
  });

  projectView.handleMainNav();
};
