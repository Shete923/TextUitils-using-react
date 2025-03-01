import React from 'react'

export default function Alert(props) {

    function Capitalise(word) {
        let lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Capitalise(props.alert.type)}</strong>:{props.alert.msg} 
    </div>
  )
}
