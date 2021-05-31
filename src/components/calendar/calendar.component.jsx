import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalendarContainer} from './calendar.styles';
import Card from '@material-ui/core/Card';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const CalendarComponent = () => {
    const [value, onChange] = useState(new Date())
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
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
       <Calendar
        onChange={onChange}
        value={value}
        selectRange={true}
        showWeekNumbers={true}
    />
    </div>
      :
     null
    }
    
    </Card>
   </CalendarContainer>
    )
}

export default CalendarComponent;


