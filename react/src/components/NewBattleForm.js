import React from 'react';

const NewBattleForm = props => {
  return (
    <div>
      <label>{props.label}
        <textarea
          name={props.name}
          type='text'
          value={props.content}
          onChange={props.handleFunction}
        />
      </label>
    </div>
  )
}

export default NewBattleForm
