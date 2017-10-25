/**
 * Created by zimingzhu on 1/22/17.
 */
class Map {
  beforeRegister() {
    this.is = 'gs-map';
    this.properties = {
      url: String,

      lat: String,

      long: String,
    }
  }

  attached() {

  }

}

Polymer(Map);
