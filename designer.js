(function(FlipClock) {
	FlipClock.setWidth('770');
    FlipClock.setHeight('116');

    var events = ['destroy', 'create', 'init', 'interval', 'start', 'stop', 'reset'];

    events.forEach(function (el) {
    	FlipClock.addEvent(el);
    });
});