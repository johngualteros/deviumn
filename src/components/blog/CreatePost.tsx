
import React from 'react';

const containerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '20px',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
};

export const CreatePost = () => {
    return (
        <div style={containerStyle}>
            <div>
                <h1>Create Post</h1>
            </div>
            <div>
                <h1>Preview</h1>
            </div>
        </div>
    );
};
