// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
export default class DummyClass {
  private _t1() {
    console.log('private t1!')
  }
  private _t2() {
    console.log('private t2!')
  }

  public m1() {
    console.log('public m1!')
  }
}
