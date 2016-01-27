require(['common'], function(common) {

    require(['react', 'react-dom', 'hello'], function(React, ReactDOM, Hello) {

        ReactDOM.render(<Hello name="Page 1"/>, document.getElementById('react-root'));
    });

});

