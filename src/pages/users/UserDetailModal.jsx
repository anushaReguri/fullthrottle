import React, { useState,useRef } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Calendar } from 'primereact/calendar';
import {getDate} from './Commons.jsx'

function UserDetailModal(props) {
const [dates, setDates] = useState({start_time:null, end_time:null})
const dt = useRef(null);

const onSelectStartDate = (event) => {
    let dateVal = event.value ?  getDate(event.value) : '';
    let val = dateVal.split(',');
    if (val.length >= 2) {
        dateVal = val[0] + ',' + val[1];
    }
    dt.current.filter(dateVal, 'start_time', 'contains');
    setDates({...dates, start_time:event.value})
};
   
    const startDateFilter =     <Calendar
    appendTo={document.body}
    value={dates.start_time}
    showButtonBar={true}
    placeholder={''}
    dateFormat="M dd,  yy"
    showIcon
    onChange={(e) => onSelectStartDate(e)}
/>

const onSelectEndDate = (event) => {
    let dateVal = event.value ?  getDate(event.value) : '';
    let val = dateVal.split(',');
    if (val.length >= 2) {
        dateVal = val[0] + ',' + val[1];
    }
    dt.current.filter(dateVal, 'end_time', 'contains');
    setDates({...dates, end_time:event.value})
};
   
    const endDateFilter =     <Calendar
    appendTo={document.body}
    value={dates.end_time}
    showButtonBar={true}
    placeholder={''}
    dateFormat="M dd,  yy"
    showIcon
    onChange={(e) => onSelectEndDate(e)}
/>

  return (
    <div id='activities'>
       <DataTable ref={dt} value={props.activity_periods}
        emptyMessage="No activity periods found">
            <Column field='start_time'  header="Start Time" filter filterElement={startDateFilter}></Column>
            <Column field='end_time' header='End Time' filter filterElement={endDateFilter}></Column>
        </DataTable>
    </div>
  )
}

export default UserDetailModal
