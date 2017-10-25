class Indicator {
  beforeRegister() {
    this.is = 'gs-indicator';
    this.properties = {
      settings: Object,
      constants: Object,
    }
  }

  attached() {
    // Fake value for test
    this.settings = {
      size : 200,
      roll : 0,
      pitch : 0,
      turn : 0,
      heading: 0,
      vario: 0,
      airspeed: 0,
      altitude: 0,
      showBox : true,
    };

    this.constants = {
      pitch_bound:30,
      vario_bound : 1.95,
      airspeed_bound_l : 0,
      airspeed_bound_h : 160
    };

    this._setRoll(20);
    this._setPitch(90);
    this._setHeading(-66);
    this._setAirSpeed(90);
    this._setVario(90);
  }

  _setRoll(roll) {
    let _element = document.querySelector('div.instrument.attitude div.roll');
    _element.style.transform = 'rotate('+roll+'deg)';
  }

  _setPitch(pitch) {
    let _element = document.querySelector('div.instrument.attitude div.roll div.pitch');

    if(pitch>this.constants.pitch_bound){
      pitch = this.constants.pitch_bound;
    } else if(pitch<-this.constants.pitch_bound){
      pitch = -this.constants.pitch_bound;
    }

    _element.style.top = pitch*0.7 + '%';
  }

  _setHeading(heading) {
    let _element = document.querySelector('div.instrument.heading div.heading');
    console.log("heading: ", _element);
    _element.style.transform = 'rotate('+ -heading +'deg)';
  }

  _setAirSpeed(speed) {
    let _element = document.querySelector('div.instrument.airspeed div.speed');

    if(speed > this.constants.airspeed_bound_h){speed = this.constants.airspeed_bound_h;}
    else if(speed < this.constants.airspeed_bound_l){speed = this.constants.airspeed_bound_l;}

    speed = 90+speed*2;
    _element.style.transform = 'rotate(' + speed + 'deg)';
  }

  _setVario(vario){
    let _element = document.querySelector('div.instrument.vario div.vario');
    if(vario > this.constants.vario_bound){vario = this.constants.vario_bound;}
    else if(vario < -this.constants.vario_bound){vario = -this.constants.vario_bound;}

    vario = vario*90;
    _element.style.transform = 'rotate(' + vario + 'deg)';
  }
}

Polymer(Indicator);
