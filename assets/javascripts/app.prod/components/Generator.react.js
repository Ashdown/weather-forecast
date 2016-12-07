(function (React, App) {
    App.Components.Generator = React.createClass({displayName: "Generator",

        render: function () {

            return (
                React.createElement("section", null, 
                    React.createElement("a", {href: "#", onClick: this._onGenerateForecast}, "Generate forecast")
                )
                );

        },

        _onGenerateForecast: function() {

            App.Actions.Generator.create();
        }
    });

})(React, App);