import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    cells: DS.hasMany('cell', {async: false}),


    init() {
        this._super(...arguments);

        for(let i = 0; i<100; i++){
            this.cells.createRecord()
        }
    }
});
