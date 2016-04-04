Template.greenlist.isCompany = function(){
  if (!(this.company == ("" || undefined || null))){
    return true;
  }
  return false;
}

Template.greenlist.hasTag = function(tag){
  if (this.tags.indexOf(tag) > -1){
    return true;
  }
  return false;
}

Template.greenlist.onRendered(function() {
	this.subscribe('companyArticles');
});

Template.greenlist.helpers({
	articles: function () {
		return Articles.find({"company":{$exists:true}});
	},
  categories: function(){
    var companyArticles = Articles.find({"company":{$exists:true}}).fetch();
    var categoryArray = new Array(companyArticles.length);
    for (var i=0; i< companyArticles.length; i++){
      categoryArray[i] = companyArticles[i].tags;
    }
    return categoryArray.sort();
  }
});
