import React from "react";
import "./weather.css";
import ShowIcons from "./icons";

export default function Forecast() {
  return (
    <div className="listFix col-11">
      <div className="row">
        <div className="col-2">
          <p>Monday</p>
          <ShowIcons all="01d" size={23} />
          <p>
            <span>28</span> 21
          </p>
        </div>
        <div className="col-2">
          <p>Monday</p>
          <ShowIcons all="01d" size={23} />
          <p>
            <span>28</span> 21
          </p>
        </div>
        <div className="col-2">
          <p>Monday</p>
          <ShowIcons all="01d" size={23} />
          <p>
            <span>28</span> 21
          </p>
        </div>
        <div className="col-2">
          <p>Monday</p>
          <ShowIcons all="01d" size={23} />
          <p>
            <span>28</span> 21
          </p>
        </div>
        <div className="col-2">
          <p>Monday</p>
          <ShowIcons all="01d" size={23} />
          <p>
            <span>28</span> 21
          </p>
        </div>
        <div className="col-2">
          <p>Monday</p>
          <ShowIcons all="01d" size={23} />
          <p>
            <span>28</span> 21
          </p>
        </div>
      </div>
    </div>
  );
}
