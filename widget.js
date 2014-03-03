WAF.define('FlipClock', ['waf-core/widget'], function(widget) {
	var FlipClock = widget.create('FlipClock', {
		autoStart: widget.property({
			type: 'boolean',
			defaultValue: true,
			bindable: false,
			description: 'Auto-start'
		}),

		countdown: widget.property({
			type: 'boolean',
			defaultValue: false,
			bindable: false
		}),

		justDiff: widget.property({
			type: 'boolean',
			defaultValue: false,
			bindable: false,
			description: 'Display difference'
		}),

		value: widget.property({
			type: 'string',
			defaultValue: new Date().toDateString()
		}),

		clockFace: widget.property({
			type: 'enum',
			defaultValue: 'TwentyFourHourClock',
			values: {
				Counter: 'Counter',
				DailyCounter: 'Daily counter',
				HourlyCounter: 'Hourly counter',
				MinuteCounter: 'Minute counter',
				TwelveHourClock: '12 hour clock',
				TwentyFourHourClock: '24 hour clock'
			},
			bindable: false,
			description: 'Type'
		}),

		language: widget.property({
			type: 'enum',
			defaultValue: 'english',
			values: {
				arabic: 'Arabic',
				english: 'English',
				german: 'German',
				spanish: 'Spanish',
				french: 'French',
				russian: 'Russian'
			},
			bindable: false
		}),

		init: function() {
			var $ = jQuery.noConflict(true);

			// Set the events
			var events = ['destroy', 'create', 'init', 'interval', 'start', 'stop', 'reset'];
			var that = this;
			var options = {
				callbacks: {},
				clockFace: this.clockFace()
			};
			var args = [options];
			var $node = $(this.node);

			events.forEach(function(el, i, array) {
				options.callbacks[el] = function(ev) {
					this.fire(el);
				}.bind(that);
			});

			// Init the value:
			if(typeof this.clockFace() === 'string' && this.clockFace().toLowerCase().indexOf('counter') >= 0){
				var value = new Date();

				if(isNaN(this.value())){
					var d = new Date(this.value());

					value = d.getTime()/1000;

					if(this.justDiff()){
						value -= new Date().getTime()/1000;
					}
				}else{
					value = this.value();
				}
				
				options.countdown = this.countdown();
				options.autoStart = this.autoStart();
				options.language = this.language();

				args.unshift(value);
			}

			//this.clock = $node.FlipClock.apply($node, args);
			this.clock = $node.FlipClock({
				clockFace: 'TwentyFourHourClock'
			})
		},

		start: function() {
			this.clock.start.apply(this.clock, arguments);
		},

		stop: function() {
			this.clock.stop.apply(this.clock, arguments);
		},

		reset: function() {
			this.clock.reset.apply(this.clock, arguments);
		},

		flip: function() {
			this.clock.flip.apply(this.clock, arguments);
		},

		setOptions: function() {
			this.clock.setOptions.apply(this.clock, arguments);
		},

		setTime: function() {
			this.clock.setTime.apply(this.clock, arguments);
		},

		convertDigitsToArray: function() {
			this.clock.convertDigitsToArray.apply(this.clock, arguments);
		},

		digit: function() {
			return this.clock.digit.apply(this.clock, arguments);
		},

		digitize: function() {
			return this.clock.digitize.apply(this.clock, arguments);
		},

		setCountdown: function() {
			this.clock.setCountdown.apply(this.clock, arguments);
		},

		getTime: function() {
			return this.clock.getTime.apply(this.clock, arguments);
		},

		getDays: function() {
			return this.clock.getDays.apply(this.clock, arguments);
		},

		getHourCounter: function() {
			return this.clock.getHourCounter.apply(this.clock, arguments);
		},

		getHours: function() {
			return this.clock.getHours.apply(this.clock, arguments);
		},

		getMinutes: function() {
			return this.clock.getMinutes.apply(this.clock, arguments);
		},

		getMinuteCounter: function() {
			return this.clock.getMinuteCounter.apply(this.clock, arguments);
		},

		getSeconds: function() {
			return this.clock.getSeconds.apply(this.clock, arguments);
		},

		getWeeks: function() {
			return this.clock.getWeeks.apply(this.clock, arguments);
		},

		removeLeadingZeros: function() {
			this.clock.removeLeadingZeros.apply(this.clock, arguments);
		}
	});

	return FlipClock;

});