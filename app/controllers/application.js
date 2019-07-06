import Controller from '@ember/controller';
import Ember from 'ember';
export default Controller.extend({
  name:'Sai',
  newItem:"",
  menuAvailable:Ember.computed.filterBy('model','isAvailable',true),
  menuLength:Ember.computed.alias('model.length'),
  actions:{
    makeUnavailable(food){
       Ember.set(food, 'isAvailable', false);
      food.save();
    },
    makeAvailable(food){
       Ember.set(food, 'isAvailable', true);
      food.save();
    },
    saveItem(){
      this.store.createRecord('food',{
        name:this.get('newItem'),
        isAvailable:false
      }).save();
      this.set('newItem',"");
    },
    destroy(food){
      food.destroyRecord();
    }
  }
});
