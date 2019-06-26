import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    templatePicture: DS.belongsTo('picture', {async: false}),
    playerPicture: DS.belongsTo('picture', {async: false}),

    init() {
        this._super(...arguments);

        this.set('templatePicture', this.store.createRecord('picture'));
        this.set(
          "playerPicture",
          this.store.createRecord("picture")
        );
    }
});
