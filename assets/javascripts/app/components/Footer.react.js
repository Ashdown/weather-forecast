(function (React, App) {

    App.Components.Footer = React.createClass({
        render: function() {
            return(
                <div className="footer">
                    <a className="link" href="https://github.com/Ashdown/weather-forecast">Weather Forecast on github</a>
                </div>
                );
        }
    });

})(React, App);