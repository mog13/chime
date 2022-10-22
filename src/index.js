 export default class Chime {
	
    constructor() {
	this.ctx = new (window.AudioContext || window.webkitAudioContext)();
	this.default = {
		volume:0.5,
		frequency:500,
		duration:1,
		type:"sine"
	}
    }

    PlayNote(frequency,duration,volume,type) {
	if(frequency === undefined) frequency = this.default.frequency;
	if(duration === undefined) duration = this.default.duration;
	if(volume === undefined) volume = this.default.volume;
	if(type === undefined) type = this.default.type;

	let osc = this.ctx.createOscillator();
	let gain = this.ctx.createGain();
	gain.gain.setValueAtTime(volume,this.ctx.currentTime);
	osc.type = type;
	osc.frequency.setValueAtTime(frequency,this.ctx.currentTime);
	osc.connect(gain);
	gain.connect(this.ctx.destination);
	osc.start();
	osc.stop(this.ctx.currentTime + (duration));
    }

	 PlaySine(frequency,duration,volume) {
		 this.PlayNote(frequency,duration,volume,"sine");
	 }

	 PlaySquare(frequency,duration,volume) {
		 this.PlayNote(frequency,duration,volume,"square");
	 }

	 PlayTriangle(frequency,duration,volume) {
		 this.PlayNote(frequency,duration,volume,"triangle");
	 }

	 PlaySawtooth(frequency,duration,volume) {
		 this.PlayNote(frequency,duration,volume,"sawtooth");
	 }
 }


