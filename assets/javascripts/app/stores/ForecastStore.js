(function (React, App, assign) {


//    var EventEmitter = require('events').EventEmitter;

    var CHANGE_EVENT_STRING = 'change';
    var CHANGE_EVENT = new Event(CHANGE_EVENT_STRING);
    var _forecasts = {};

    /**
     * Create a Forecast item.
     * @param {string} text The content of the Forecast
     */

    function create(text) {
        //use current timestamp in place of the id
        var id = Date.now();
        _forecasts[id] = {
            id: id,
            complete: false,
            text: text
        };
    }

    /**
     * delete a Forecast item
     * @param {string} id
     */

    function destroy(id) {
        delete _forecasts[id];
    }

    App.Stores.ForecastStore = function(){};

    App.Stores.ForecastStore = assign({}, App.Stores.ForecastStore.prototype, {

        getAll: function () {
            return _forecasts;
        },

        emitChange: function() {
            console.log('emit change');
            App.target.dispatchEvent(CHANGE_EVENT);
        },

        addChangeListener: function(callback) {
            App.target.addEventListener(CHANGE_EVENT_STRING, function() {
                console.log('change event called');
                callback();
            });
        },

        removeChangeListener: function(callback) {
            App.target.removeEventListener(CHANGE_EVENT_STRING, callback)
        },

        dispatcherIndex: App.Dispatcher.register(function (payload) {

            var action = payload.action;
            var text;

            switch (action.actionType) {
                case App.Constants.GeneratorConstants.FORECAST_CREATE:

                    //todo: create one forecast for each forecast data

                    text = 'test';
                    if (text !== '') {
                        create(text);
                        App.Stores.ForecastStore.emitChange()
                    }
                    break;
                case App.Constants.GeneratorConstants.FORECAST_DESTROY:
                    destroy(action.id);
                    App.Stores.ForecastStore.emitChange();
                    break;
                //add more cases for other action types...ie TODO_UPDATE
            }

            return true; //=> no errors (needed by promise in dispatcher)
        })

    });

})(React, App, objectAssign);
