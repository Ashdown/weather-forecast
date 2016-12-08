(function (React, App, assign) {

    var CHANGE_EVENT_STRING = 'change';
    var CHANGE_EVENT = new Event(CHANGE_EVENT_STRING);
    var _forecasts = {};

    /**
     * Create a Forecast item.
     * @param {basicDescription} text
     * @param {detailedDescription} text
     */

    function create(id, basicDescription, detailedDescription) {
        //use current timestamp as id
        _forecasts[id] = {
            id: id,
            basicDescription: basicDescription,
            detailedDescription: detailedDescription
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
            App.target.dispatchEvent(CHANGE_EVENT);
        },

        addChangeListener: function(callback) {
            App.target.addEventListener(CHANGE_EVENT_STRING, callback);
        },

        removeChangeListener: function(callback) {
            App.target.removeEventListener(CHANGE_EVENT_STRING, callback)
        },

        dispatcherIndex: App.Dispatcher.register(function (payload) {

            var action = payload.action;
            var text;

            switch (action.actionType) {
                case App.Constants.GeneratorConstants.FORECAST_CREATE:

                    for (var key in action.data) {
                        create(
                            action.data[key].id,
                            action.data[key].basicDescription,
                            action.data[key].detailedDescription);
                    }

                    App.Stores.ForecastStore.emitChange();
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
