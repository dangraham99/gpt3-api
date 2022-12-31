import React from 'react'

function AlertBox() {
    return (
        <div>
            {true && (
                <div className="fixed bottom-0 left-0 right-0 flex justify-center top-12 z-1 bg-slate-200">
                    <p>Message</p>
                </div>
            )}
        </div>
    );
};

export default AlertBox

