import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import CalendarEvents from "../../components/CalendarEvents/CalendarEvents";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";

const CalendarPage = () => {
  const { authSlice } = useSelector((state: RootState) => state);

  return (
    <div className="calendar-page mx-auto max-w-screen-xl px-2 md:px-16 page__container">
      <h1 data-testid='calendarHeading'>Calendar</h1>
      <div className="page-details__container">
        {authSlice.isSignedIn ? (
          <CalendarEvents/>
        ) : (
          <>
            <p className="pb-4">Please login to access your calendar events</p>
            <GoogleLogin/>
          </>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
