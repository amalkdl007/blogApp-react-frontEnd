import React from 'react';
import "./Articles.css";

const Pageloader = ({loading}) => {
    if (loading) {
        return (
            <>
                <div className="load">
                    <div className="loader">
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <div></div>
        );
    }
};

export default Pageloader;