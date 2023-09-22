import React from 'react';

function PostItem(props) {
    const {title, body} = props;
    return (
        <div class="card m-3" style={{  width: '21rem' }}>
            <div class="card-body">
                <h3 class="card-title text-center m-3">{ title }</h3>
                <h6 class="card-subtitle mb-2 text-muted mt-2">posted on/by</h6>
                <p class="card-text">{ body }</p>
            </div>
        </div>
    );
}

export default PostItem;