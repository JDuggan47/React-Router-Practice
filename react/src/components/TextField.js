import React from 'react';

const TextField = props => {
  return (
    <div className='row'>
        <textarea
          type='text' id='middle-label' placeholder={props.label}
          value={props.content}
          onChange={props.handleFunction}
        />
    </div>
  )
}

export default TextField
