define(['react'], function(React) {

    class Echo extends React.Component {

        render() {
            return (
                <h1>Echo {this.props.name}</h1>
            );
        }

    }

    return Echo;

});
