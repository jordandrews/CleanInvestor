Meteor.publish('articles', function () {
  return Articles.find({}, { sort: { createdAt: -1 }, limit: 30 });
  this.ready();
});

Meteor.publish('oneArticle', function(articleTitle) {
  return Articles.find({ title: articleTitle });
  this.ready();
});

Meteor.publish('topArticles', function(){
  return Articles.find({}, { sort: { createdAt: -1 }, limit: 5 });
  this.ready();
});

Meteor.publish("companyArticles", function(){
  return Articles.find({"company":{$exists:true}});
  this.ready();
});
