import Controller from '@ember/controller';
import Ember from 'ember';
export default Controller.extend({
  name:'Sai',
  newItem:"",
  menuAvailable:Ember.computed.filterBy('model','isAvailable',true),
  menuLength:Ember.computed.alias('model.length'),
  orderSum:Ember.computed.mapBy('model','numberOfOrders'),
  numOrdersCount: Ember.computed.sum('orderSum'),
  numOrders:'',
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
        isAvailable:false,
        numberOfOrders:this.get('numOrders')
      }).save();
      this.set('newItem',"");
      this.set('numOrders',"")
    },
    destroy(food){
      food.destroyRecord();
    },
    increaseOrder(food){

        Ember.set(food,'numberOfOrders', Ember.get(food,'numberOfOrders')+1);
        food.save();
    },
    decreaseOrder(food){
     if(Ember.get(food,'numberOfOrders')>1){
       Ember.set(food,'numberOfOrders', Ember.get(food,'numberOfOrders')-1);
       food.save();
      }
     }
  }
});
