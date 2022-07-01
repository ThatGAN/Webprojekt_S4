import React, {Component, useState} from "react";
import Header from "./Header";
import {BrowserView, MobileView} from 'react-device-detect';
import HeaderMobile from "./HeaderMobile";
import 'date-fns'
import {Grid} from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboarddatePicker
} from '@material-ui/pickers'


function Tagebuch() {

    const [selectedDate, setSelectedDate] = useState(
        new Date("2022-07-01")
    )

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }


        return (
            <div>
                <div className="diary-calendar">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify='space-around'>
                            <KeyboarddatePicker
                                disableToolbar
                                variant='dialog'
                                format='MM/dd/yy'
                                margin='normal'
                                id='date-picker'
                                label='Date Picker'
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label' : 'change date'
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>

                </div>
                <BrowserView>
                    <Header/>
                </BrowserView>
                <MobileView>
                    <HeaderMobile/>
                </MobileView>
            </div>
        );


}

export default Tagebuch;
