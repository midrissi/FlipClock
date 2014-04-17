## Custom Widget for [Wakanda](http://wakanda.org/): FlipClock

A FlipClock widget based on [FlipClock.js](http://flipclockjs.com/) Library.

### Properties
This widget __MorrisBarChart__ has the following properties: 

* __autoStart__: A list of attributes that contain Y values (one for each series of data to be plotted).
* __countdown__: Set to true to draw bars stacked vertically.
* __justDiff__:
  - Set to false to always show a hover legend. 
  - Set to 'auto' to only show the hover legend when the mouse cursor is over the chart. 
  - Set to true to never show a hover legend.
* __clockFace__: Set the color of the axis labels (default: #888).
* __language__: Set to false to disable drawing the x and y axes.

And has the following methods:
* __start(callback)__: This method will start the clock just call the .start() method on an FlipClock object. The callback will be called after the clock started.
* __stop(callback)__: This method will stop the clock just call the .stop() method on an FlipClock object. The callback will be called after the clock stopped.
* __reset(callback)__: This method will reset the clock. The callback will be called after the clock resets.
* __flip__: This method will flip the clock
* __setOptions__: Set multiple objects by passing a JSON object with the index being the property name along with the propety value.
* __setTime__: This method will set the clock time after it has been instantiated just call the .setTime() method on an FlipClock object.
* __digit(int)__: This method will get a specific digit from the time integer.
* __digitize(obj)__: This method will formats any array of digits into a valid array of digits.
* __setCountdown__: This method set the clockdown property to true or false. In addition to setting the property, this method will also change the direction the clock is flipping.
* __getTime__: To get the clock time after it has been instantiated just call the .getTime() method on an FlipClock object.
* __getDays(mod)__: This method will get the number of days. If the mod parameter is true, then a digit of 0-6 will be returned.
* __getHourCounter__: This method will get the an hourly breakdown and returns a digitized object.
* __getHours(mod)__: This method will get the number of hours. If the mod parameter is true, then a digit of 0-23 will be returned.
* __getMinutes(mod)__: This method will get the number of minutes. If the mod parameter is true, then a digit of 0-59 is returned.
* __getMinuteCounter__: This method will get the a minute breakdown and return a digitized object.
* __getSeconds(mod)__: This method will get the number of seconds. If the mod parameter is true, then a digit of 0-59 will be returned.
* __getWeeks(mod)__: This method will get the number of weeks. If the mod parameter is true, then a digit of 0-51 is returned.
* __removeLeadingZeros(totalDigits, digits)__: This method will emoves a specific number of leading zeros from the array. This method prevents you from removing too many digits, even if you try. This method returns an array.

And has the following events:
* __destroy__: This event is triggered when the timer is destroyed
* __create__: This callback is triggered when the clock face is created
* __init__: This callback is triggered when the FlipClock object is initialized
* __interval__: This callback is triggered with each interval of the timer
* __start__: This callback is triggered when the clock is started
* __stop__: This callback is triggered when the clock is stopped
* __reset__: This callback is triggered when the timer has been reset

### Install
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.
