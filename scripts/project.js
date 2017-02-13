'use strict';

var allProjects = [];
console.log(allProjects);

function Project(opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.projectName = opts.name;
  this.screenshot = opts.screenshot;
  this.imgAlt = opts.imgAlt;
  this.projectUrl = opts.projectUrl;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone().removeClass('template');
  $newProject.attr('data-category', this.category);
  $newProject.find('.title').text(this.title);
  $newProject.find('.byline a').text(this.projectName);
  $newProject.find('.byline a').attr('url', this.projectUrl)
  $newProject.find('time[pubdate]').attr('datetime', this.publishedOn);
  $newProject.find('time[pubdate]').attr('title', this.publishedOn);
  $newProject.find('img.screenshot', this.screenshot).attr('url', this.screenshot);
  $newProject.find('img.screenshot').attr('alt', this.imgAlt);
  $newProject.find('.project-body').html(this.body);
  // snagged from starter code
  $newProject.find('time').text('Last update: ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  // snagged from starter code
  return $newProject;
};

projectData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projectData.forEach(function(ele) {
  allProjects.push(new Project(ele));
});

allProjects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
