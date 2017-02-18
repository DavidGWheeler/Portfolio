'use strict';

const projectView = {};

  // projectView.handleSubNav = function() {
  //   $('.sub-nav').on('hover', '.col', function() {
  //     $('.col').css({display: "block"});
  //   });
  // $('#' + $(this).data('num')).fadeIn();
  // $('.col').toggleClass('full-width');
//   $('sub-nav .col:first').click();
// };

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

$('pre code').each(function(i, block) {
  hljs.highlightBlock(block);
});

projectView.initIndexPage = function() {
  Project.all.forEach(function(a){
    $('#projects').append(a.toHtml())
  });

  projectView.handleMainNav();
};
