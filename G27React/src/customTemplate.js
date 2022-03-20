
//test
//using a custom alertTemplate.

const AlertTemplate =({style,options,message,close})=>{
  const alertStyle = {
    margin: 0,
    backgroundColor: '#f1356d',
    color:'white',
    padding: '10px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    display: 'flex',
  };

  const btnStyle ={
    background: '#f1356d',
    color: 'white',
    textDecoration: 'none',
    border: 0,
    borderRadius: '8px',
    cursor: 'pointer',
  }
  return(
    <div style={alertStyle}>
    {options.type ==='info'&&'!'}
    {options.type === 'success' &&''}
    {options.type === 'error' && ':('}
    {message}
    <button style={btnStyle} onClick={close}>X</button>
    </div>

  );

}

export default AlertTemplate;
