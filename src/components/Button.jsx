import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/actions/Actions'


const Button = (props) => {


  const selector = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  const setVal = () => {

    let prev = props.forCalculation;
    const lastStateValue = props.state[props.state.length - 1];
    const clickedValue = props.value;
    const operators = ['+', '-', '*', '÷', '%']
    const allValues = props.Output;
    let lastArrayValue = prev[prev.length - 1];

    console.log("1lastArrayValue", lastArrayValue);
    console.log(allValues[0])


    if (clickedValue === 'Del') {
      if (props.Output === '') return
      if (lastArrayValue === '') prev.pop();
      lastArrayValue = prev[prev.length - 1];
      props.setOutput((allValues).slice(0, -1))
      props.setState((props.state).slice(0, -1))

      console.log("2lastArrayValue", lastArrayValue);
      let updatedLastArrayValue = lastArrayValue.slice(0, -1);
      console.log("3lastArrayValue", lastArrayValue);
      prev[prev.length - 1] = updatedLastArrayValue;

    } else if (clickedValue === 'AC') {
      props.setOutput('');
      props.setState('');
      props.setforCalculation([]);
    } else {



      if ((lastStateValue === '+' || lastStateValue === '-' || lastStateValue === '*' || lastStateValue === '÷' || lastStateValue === '.' || lastStateValue === '%') && (clickedValue === '+' || clickedValue === '-' || clickedValue === '*' || clickedValue === '÷' || clickedValue === '.' || clickedValue === '%')) return
      else if (allValues === '' && (clickedValue === '+' || clickedValue === '*' || clickedValue === '÷' || clickedValue === '.' || clickedValue === '%')) return
      else if (props.state.includes('.') && clickedValue === '.') return
      else {
        if (props.isCalculated) {
          if (clickedValue === '+' || clickedValue === '-' || clickedValue === '*' || clickedValue === '÷') {
            props.setOutput(allValues.concat(clickedValue))
            props.setisCalculated(false);
          } else {
            props.setOutput(clickedValue.toString())
            props.setisCalculated(false);
          }
        } else {
          props.setOutput(allValues.concat(clickedValue))
        }
      }


      if (props.state.length === 0) {

        props.setState(props.state.concat(clickedValue));
        prev.push(clickedValue.toString())
        props.setforCalculation(prev)

      }
      else if (!operators.includes(clickedValue) && lastStateValue >= 0 || lastStateValue == '.') {

        if (props.isCalculated) {
          if (clickedValue === '+' || clickedValue === '-' || clickedValue === '*' || clickedValue === '÷') {
            props.setState(props.state.concat(clickedValue));
            prev[prev.length - 1] = props.state.concat(clickedValue);
            props.setforCalculation(prev);
            props.setisCalculated(false);
          } else {
            props.setState(clickedValue.toString());
            props.setforCalculation([clickedValue.toString()])
            props.setisCalculated(false);
          }
        } else {
          props.setState(props.state.concat(clickedValue));
          prev[prev.length - 1] = props.state.concat(clickedValue);
          props.setforCalculation(prev);
        }

      } else if (operators.includes(clickedValue) || lastStateValue == '+' || lastStateValue == '-' || lastStateValue == '*' || lastStateValue == '÷' || lastStateValue == '%') {

        props.setState(clickedValue.toString())
        prev.push(clickedValue.toString());
        props.setforCalculation(prev)

      }
    };

  }

  const cal = () => {

    let array = props.forCalculation;
    let forCalculation = array.join('');

    const lastStateValue = props.state[props.state.length - 1];

    if ((!forCalculation.includes('+')) && (!forCalculation.includes('-')) && !forCalculation.includes('*') && !forCalculation.includes('÷') && !forCalculation.includes('%')) return
    else {
      if ((lastStateValue === '+' || lastStateValue === '-' || lastStateValue === '*' || lastStateValue === '÷' || lastStateValue === '.' || lastStateValue === '%')) {
        return
      }
      else if (props.state === '') {
        return
      }
      else {
        props.setisCalculated(true);
        let ValueToCal = (forCalculation).replace('÷', '/')
        // state.push((ValueToCal).toString());
        let finalValue = eval(ValueToCal).toString();
        props.setState(finalValue);
        props.setOutput(finalValue)
        props.setforCalculation([finalValue]);

        selector.push(forCalculation);
        dispatch(history(selector));
      }
    }
  }

  // const setOperator = () => {

  //   alert('operator')
  //   props.setState({
  //     val1: props.state.val1,
  //     operator: clickedValue,
  //     val2: 0
  //   })
  // }

  return <>
    <button className={`num-buttons ${props.className}`} onClick={props.value === '=' ? () => cal() : () => setVal()}> {props.value} </button>
    {/* <button className={`num-buttons ${props.class}`} onClick={clickedValue === '*' ? () => setOperator() : () => setVal()} >{clickedValue}</button> */}
  </>
}

export default Button