Template.home.onRendered(function() {
	this.subscribe('articles');
});

Template.home.helpers({
	articles: function () {
		return Articles.find({}, { sort: { createdAt: -1 } });
	}
});
