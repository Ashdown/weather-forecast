(function (React, App) {

    function getTodoState() {

        return {
            allTodos: App.Stores.TodoStore.getAll()
        };
    }

    App.Components.Container = React.createClass({
        getInitialState: function () {
            return getTodoState();
        },

        componentDidMount: function () {
            App.Stores.TodoStore.addChangeListener(this._onChange);
        },

        componentWillUnmount: function () {
            App.Stores.TodoStore.removeChangeListener(this._onChange);
        },

        /**
         * @return {object}
         */
        render: function () {
            return (
                <div>
                    <App.Components.Generator />
                    <App.Components.Forecast />
                    <App.Components.Footer />
                </div>
                );
        },

        _onChange: function () {
            this.setState(getTodoState());
        }

    });

})(React, App);