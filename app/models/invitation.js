import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  email: DS.attr('string'),
  first: DS.attr('string'),
  last: DS.attr('string'),

  fullName: computed('first', 'last', function() {
    return this.get('first') + ' ' +  this.get('last');
  })
});
