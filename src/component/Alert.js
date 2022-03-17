import React from 'react'

export default function Alert(props) {
  const capitalized=(word)=>{
    const ll=word.toLowerCase();
    return ll.charAt(0).toUpperCase()+ll.slice(1);
  }
 return ( 
  props.alert.type && <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show role="alert`}>
        <strong>{capitalized(props.alert.type)}</strong> {props.alert.message}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div> 
  )
}
