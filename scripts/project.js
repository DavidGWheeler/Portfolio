'use strict';

var allProjects = [];
console.log(allProjects);

function Project(opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.name = opts.name;
  this.screenshot = opts.screenshot;
  this.imgAlt = opts.imgAlt;
  this.description = opts.description;
  this.projectUrl = opts.projectUrl;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone().removeClass('.template');
  if (!this.publishedOn) $newProject.addClass('draft');
  $newProject.find('h1:first').text(this.title);
  $newProject.data('category', this.category);
  $newProject.attr('data-category', this.category);
  $newProject.find('img.screenshot', this.screenshot).attr('url', this.screenshot);
  $newProject.find('img.screenshot').attr('alt', this.imgAlt);
  $newProject.find('.byline a').text(this.name);
  $newProject.find('.byline a').attr('url', this.projectUrl)
  $newProject.find('.article-body').html(this.body);
  $newProject.find('time[pubdate]').attr('datetime', this.publishedOn);
  $newProject.find('time[pubdate]').attr('title', this.publishedOn);
  $newProject.find('time').text('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  return $newProject;
};

projectData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projectData.forEach(function(projectObject) {
  allProjects.push(new Project(projectObject));
});

allProjects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
