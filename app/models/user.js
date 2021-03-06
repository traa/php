import DS from 'ember-data';

export default DS.Model.extend({
  login: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  role: DS.attr('number')
});
