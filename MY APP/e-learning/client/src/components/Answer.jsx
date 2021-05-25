import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

const Answer = (props) => {
    const [correntness,setCorrentness] = useState("");

    const handleChange = (selected) => {
        if (selected === props.answer[0].props.children) {
            setCorrentness("正解です");
        } else {
            setCorrentness("不正解です");
        }
    };

    return (
        <div>
            <Button variant="contained" onClick={() => handleClick(1)}>{props.chice1}</Button>
            <Button variant="contained" onClick={() => handleClick(2)}>{props.chice2}</Button>
            <Button variant="contained" onClick={() => handleClick(3)}>{props.chice3}</Button>
            <Button variant="contained" onClick={() => handleClick(4)}>{props.chice4}</Button>
            <p>{correntness}</p>
        </div>
    );
}

export default Answer;