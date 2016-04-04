Articles = new orion.collection('articles', {
  singularName: orion.helpers.getTranslation('articles.singularName'), // The name of one of this items
  pluralName: orion.helpers.getTranslation('articles.pluralName'), // The name of more than one of this items
  title: orion.helpers.getTranslation('articles.title'), // The title of the page
  link: {
    /* Sidbebar Text */
    title: orion.helpers.getTranslation('articles.title')
  },
  /* Table settings - to show columns in the main 'Articles' page */
  tabular: {
    columns: [
      { data: 'title', title: orion.helpers.getTranslation('articles.schema.title') },
      orion.attributeColumn('image', 'image', orion.helpers.getTranslation('articles.schema.image')),
      orion.attributeColumn('createdBy', 'createdBy', orion.helpers.getTranslation('articles.schema.createdBy')),
      orion.attributeColumn('createdAt', 'createdAt', orion.helpers.getTranslation('articles.schema.createdAt'))
    ]
  }
});


Articles.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: orion.helpers.getTranslation('articles.schema.title') // We use this function to make i18n work in autoform
  },
  company: {
    type: String,
    optional: true,
    label: orion.helpers.getTranslation('articles.schema.company')
  },
  tags: {
    type: String,
    optional: true,
    label: orion.helpers.getTranslation('articles.schema.tags')
  },
  blurb: {
    type: String,
    label: orion.helpers.getTranslation('articles.schema.blurb')
  },
  image: orion.attribute('image', {
      label: orion.helpers.getTranslation('articles.schema.image'), // We use this function to make i18n work in autoform
      optional: true
  }),
  body: orion.attribute('summernote', {
      label: orion.helpers.getTranslation('articles.schema.body') // We use this function to make i18n work in autoform
  }),
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));

Articles.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});
