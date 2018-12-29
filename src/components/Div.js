import React from "react";

const Div = props => {
    return (
        <div {...props} style={styles}>
            {props.children}
        </div>
    );
};

export default Div;
