require(['common'], function(common) {

    require(['react', 'react-dom', 'echo'], function(React, ReactDOM, Echo) {
        ReactDOM.render(<Echo name="Page 2" />, document.getElementById('react-root'));
    });

});

