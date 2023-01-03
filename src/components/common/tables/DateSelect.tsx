import React from "react";
import {
  DateRangePicker,
  DateRangeDelimiter,
  LocalizationProvider,
  DateRange,
} from "@material-ui/pickers"
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns"
import { Button } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const DateSelect = () => {
  const [selectedDate, handleDateChange] = React.useState<any>([null, null]);
  const [calendarOpen, setCalendarOpen] = React.useState(false);

  const getDate = () => {
    console.log(selectedDate);
    const s = `${new Date(selectedDate[0]).toDateString()}`.split(" ");
    const e = `${new Date(selectedDate[1]).toDateString()}`.split(" ");
    return `${s[1]} ${s[2]} ${s[3]} - ${e[1]} ${e[2]} ${e[3]} `
  }
  return (
    <LocalizationProvider dateAdapter={DateFnsUtils}>
      <DateRangePicker
        open={calendarOpen}
        startText="from"
        endText="to"
        value={selectedDate}
        onChange={(date: any) => handleDateChange(date)}
        renderInput={(startProps: any, endProps: any) => (
          <div>
            <button onClick={() => setCalendarOpen((calendarOpen) => !calendarOpen)} className="showDate">
              {getDate()}
              <span className="cal"><CalendarMonthIcon /></span>
            </button>
          </div>
        )
        }
      />
    </LocalizationProvider>
  );
}
