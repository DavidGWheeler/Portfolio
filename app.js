'use strict';

function Project(opts) {
  this.name = opts.name;
  this.screenshot = opts.screenshot;
  this.imgAlt = opts.imgAlt;
  this.description = opts.description;
  this.link = opts.projectUrl;
  this.body = opts.body;
  this.category = opts.category;
  this.publishedOn = opts.publishedOn;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone().removeClass('.template');
  $newProject.find('h1:first').text(this.title);
  $newProject.find('img.screenshot', this.screenshot).attr('url', this.screenshot);
  $newProject.find('img.screenshot').attr('alt', this.imgAlt);
  $newProject.attr('data-category', this.category);
  $newProject.find('.byline a').text(this.name);
  $newProject.find('.byline a').attr('url', this.projectUrl)
  $newProject.find('.article-body').html(this.body);
  $newProject.find('time[pubdate]').attr('datetime', this.publishedOn);
  $newProject.find('time[pubdate]').attr('title', this.publishedOn);
  $newProject.find('time').text('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  return $newProject;
};
