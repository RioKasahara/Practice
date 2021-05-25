import React,{useState} from 'react';
import {getDate} from '../variables/date';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { Card } from 'material-ui/core';

import Answer from '../components/Answer';
import Questions from '../components/Questions';

const useStyles = makeStyles ((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        button: {
            marginTop: theme.spacing(1)
        },
    },
}));

const Selection = () => {
    const classes = useStyles();
    const [page, setPage] = useState(1);

    const current_date = getDate.filter((date) => {
        return date.contents_detail_id === page;
    });
    const current_answer = current_date.map((date) => (<li key={date.contents_detail_id}>{date.answer}</li>));

    const handleChange = (event,value) => {
        setPage(value);
    };

    const current_choice1 = current_date.map((date) => (
                            　 <li key={date.contents_detail_id}>{date.choice1}</li>
                            ));
    const current_choice2 = current_date.map((date) => (
                            　 <li key={date.contents_detail_id}>{date.choice2}</li>
                            ));
    const current_choice3 = current_date.map((date) => (
                            　 <li key={date.contents_detail_id}>{date.choice3}</li>
                            )); 
    const current_choice4 = current_date.map((date) => (
                               <li key={date.contents_detail_id}>{date.choice4}</li>
                            ));
//  const img = current_date.map((date) => (
//                               <li key={date.contents_detail_id}>{date.contents_statement}</li>
//                             ));

    return (
        <div className={classes.root}>
         <Card>
             {current_date.map((date) => (
                 <Questions key={date.contents_detail_id}
                 contents={date.contents_statement}
                 />
             ))}
         </Card>
         {current_date.map((date) => (
                                <Answer key={date.contents_detail_id}
                                  answer={current_answer}
                                  choice1={current_choice1}
                                  choice2={current_choice2}
                                  choice3={current_choice3}
                                  choice4={current_choice4}
                                  />
                                ))}
        <Pagination count={getDate.length} page={page} onChange={handleChange} />
        </div>
    );
}

export default Selection;