import React, { useEffect } from 'react'

const Button = (props) => {


  const setVal = () => {

    // let preValue1 = props.state.val1;
    // let preValue2 = props.state.val2;

    // // console.log(preValue1.toString());

    // if (props.state.operator === '') {

    //   props.setState({
    //     val1: `${parseFloat(preValue1) === 0 ? props.value : preValue1.toString() + (props.value).toString()}`,
    //     operator: '',
    //     val2: 0

    //   });
    // } else {

    //   props.setState({
    //     val1: props.state.val1,
    //     operator: props.state.operator,
    //     val2: `${parseFloat(preValue2) === 0 ? props.value : preValue2.toString() + (props.value).toString()}`

    //   });
    // }

    // if (props.value === 'AC') {
    //   props.setState({
    //     val1: 0,
    //     operator: '',
    //     val2: 0

    //   });
    // }

    console.log(props.isCalculated);

    let operators = ['+', "-", "*", '÷'];

    let currentOperator = null

    if (operators.find((e) => e == props.value)){
      currentOperator = props.value
    }


    console.log(currentOperator , props.value , '.')
    if (currentOperator && props.value == '.') {
      console.log(props.state.split(currentOperator), 'myconsole');
      let filteredValue = props.state.split(currentOperator)[1]
      if(!filteredValue.find((val)=>val == '.')){
        return props.state

      }
    }

    
    if (props.value === 'Del') {
      props.setState((props.state).slice(0, -1))
      
    } else if (props.value === 'AC') {
      props.setState('');
    } else {
      
      
      if ((props.state[(props.state).length - 1] === '+' || props.state[(props.state).length - 1] === '-' || props.state[(props.state).length - 1] === '*' || props.state[(props.state).length - 1] === '÷' || props.state[(props.state).length - 1] === '.' || props.state[(props.state).length - 1] === '%') && (props.value === '+' || props.value === '-' || props.value === '*' || props.value === '÷' || props.value === '.' || props.value === '%')) return props.state
      else if (props.state === '' && (props.value === '+' || props.value === '*' || props.value === '÷' || props.value === '.' || props.value === '%')) return props.state;
      // else if ((props.state).includes('.') && props.value === '.') return props.state
      else if ((props.state[0] === '0') || (props.state[0] === '+') || (props.state[0] === '*') || (props.state[0] === '÷') || (props.state[0] === '.') || (props.state[0] === '%')) props.setState(props.value.toString());
      else {

        if (props.isCalculated) {
          if (props.value === '+' || props.value === '-' || props.value === '*' || props.value === '÷') {
            props.setState(props.state.concat(props.value));
            props.setisCalculated(false);

          } else {
            props.setState((props.value).toString());
            props.setisCalculated(false);
          }

        }
        else {
          props.setState(props.state.concat(props.value))
        }


      };
    }

  }

  const cal = () => {

    if ((props.state[(props.state).length - 1] === '+' || props.state[(props.state).length - 1] === '-' || props.state[(props.state).length - 1] === '*' || props.state[(props.state).length - 1] === '÷' || props.state[(props.state).length - 1] === '.' || props.state[(props.state).length - 1] === '%')) {
      return props.state
    }
    else if (props.state === '') {
      return props.state
    }
    else {
      props.setisCalculated(true);
      let ValueToCal = (props.state).replace('÷', '/')
      // state.push((ValueToCal).toString());
      props.setState(eval(ValueToCal).toString());
    }
  }

  // const setOperator = () => {

  //   alert('operator')
  //   props.setState({
  //     val1: props.state.val1,
  //     operator: props.value,
  //     val2: 0
  //   })
  // }

  return <>
    <button className={`num-buttons ${props.class}`} onClick={props.value === '=' ? () => cal() : () => setVal()}> {props.value} </button>
    {/* <button className={`num-buttons ${props.class}`} onClick={props.value === '*' ? () => setOperator() : () => setVal()} >{props.value}</button> */}
  </>
}

export default Button