"use client";
import React from "react";
import EventList from "./components/EventLists";

type Props = {};

const Events = (props: Props) => {
  return (
    <div>
      <React.Fragment>
        <EventList />
      </React.Fragment>
    </div>
  );
};

export default Events;
