import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCalendarEvents } from "../../store/calendarSlice";
import { RootState } from "../../store";
import DataTable from "react-data-table-component";

import "./CalendarEvents.scss";

const CalendarEvents = () => {
  const dispatch = useDispatch();
  const { calendarSlice, authSlice } = useSelector((state: RootState) => state);

  useEffect(() => {
    if (authSlice.isSignedIn) {
      dispatch(getCalendarEvents());
    }
  }, [authSlice]);

  const columns = [
    {
      name: "Summary",
      selector: (row: any) => row.summary,
    },
    {
      name: "Status",
      selector: (row: any) => row.status,
    },
    {
      name: "Start Time",
      format: (row: any) => new Date(row.start.dateTime).toLocaleString(),
      selector: (row: any) => row.start.dateTime,
      sortable: true,
    },
    {
      name: "End Time",
      format: (row: any) => new Date(row.end.dateTime).toLocaleString(),
      selector: (row: any) => row.end.dateTime.toLocaleString(),
      sortable: true,
    },
    
  ];

  return calendarSlice.calendarEvents.length > 0 ? (
    calendarSlice.calendarEvents[0] !== false ? (
      <section className="calendar-events__container">
        <DataTable pagination columns={columns} data={calendarSlice.calendarEvents} />
      </section>
    ) : (
      <div>You do not have any events on calendar.</div>
    )
  ) : (
    <div>Loading Calendar Events...</div>
  );
};

export default React.memo(CalendarEvents);
