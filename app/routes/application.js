import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    // return [{
    //   name:'one',
    //   available:true
    // },
    // {
    //   name:'two',
    //   available:true
    // },
    // {
    //   name:'three',
    //   available:true
    // }];
    return this.store.findAll('food');
  }
});
