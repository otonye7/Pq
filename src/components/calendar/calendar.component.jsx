import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { CalendarContainer} from './calendar.styles';
import Card from '@material-ui/core/Card';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const CalendarComponent = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-05-31T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  

    return (
    <CalendarContainer>
        <div className='calendar-text'>
            <h6 className='c-text'>When is your salary next pay date ?</h6>
        </div>
        <Card className='root'>
          <div className='icons'> 
              <DateRangeIcon className='range'/>
              <h6 className='pay-text'>Select pay date</h6>
              <ExpandMoreIcon onClick={handleClick}/>
          </div>
          {
    click ? 
    <div className='calendar'> 
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
      </Grid>
    </MuiPickersUtilsProvider>
    </div>
      :
     null
    }
    
    </Card>
   </CalendarContainer>
    )
}

export default CalendarComponent;

