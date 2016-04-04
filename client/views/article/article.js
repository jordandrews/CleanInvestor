
Template.article.onRendered(function() {
	console.log('rendering');
	this.subscribe('oneArticle', Router.current().params.title);
});

Template.article.helpers({
	article: function() {
		var articleToReturn = Articles.findOne({title:Router.current().params.title});
		articleToReturn.createdAt = articleToReturn.createdAt.toDateString().substring(4);
		return articleToReturn;
	}
});
