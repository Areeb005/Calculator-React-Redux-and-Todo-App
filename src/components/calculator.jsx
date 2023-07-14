import { useState } from 'react'
import Button from './Button'
import { useSelector } from 'react-redux';

const Calculator = () => {
    const [forCalculation, setforCalculation] = useState([])
    const [Values, setValues] = useState('');
    const [isCalculated, setisCalculated] = useState(false);
    const [Output, setOutput] = useState('');
    const selector = useSelector((state) => state.myReducer);

    const onHistoryClick = (e) => {

        const clickedHistory = e.target.innerText;
        setOutput(clickedHistory);
        setValues(clickedHistory);
        setforCalculation([clickedHistory])
        setisCalculated(false);

    }



    return <>
        <div className='main-div'>
            <div>
                <div className='history'>
                    <ul>
                        {selector.map((elements, index) => {
                            return <li className='historyVal' key={index} onClick={(e) => onHistoryClick(e)}>{elements}</li>
                        })}
                    </ul>
                </div>

                <div className='output-div'>
                    <input type="text" className='result-field' value={Output} disabled />
                </div>

                <div className='buttons-div'>
                    <Button value={'AC'} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} />
                    <Button value={'Del'} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} />
                    <Button value={'%'} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} />
                    <Button value={'÷'} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} class={'last-button'} />
                </div>

                <div className='buttons-div'>
                    <Button value={7} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} />
                    <Button value={8} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} />
                    <Button value={9} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} />
                    <Button value={'*'} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} class={'last-button'} />
                </div>

                <div className='buttons-div'>
                    <Button value={4} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} />
                    <Button value={5} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} />
                    <Button value={6} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} />
                    <Button value={'-'} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} class={'last-button'} />
                </div>

                <div className='buttons-div'>
                    <Button value={1} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} />
                    <Button value={2} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} />
                    <Button value={3} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} />
                    <Button value={'+'} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} class={'last-button'} />
                </div>


                <div className='buttons-div'>
                    <Button value={0} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} />
                    <Button value={'.'} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} />
                    <Button value={'='} state={Values} setState={setValues} isCalculated={isCalculated} setisCalculated={setisCalculated} forCalculation={forCalculation} setforCalculation={setforCalculation} setOutput={setOutput} Output={Output} class={'last-button equal-btn'} />
                </div>

            </div>
        </div>
    </>
}

export default Calculator