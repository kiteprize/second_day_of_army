import React from "react";
import "./styles.css";
import Clock from "react-live-clock";

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>
          현재{" "}
          <Clock
            format={"YYYY년MM월DD일HH시mm분ss초"}
            ticking={true}
            timezone={"KR"}
          />
        </h1>
        <h1>전역일 2021년10월05일09시00분00초</h1>
      </div>
    );
  }
}
export default MyComponent;
