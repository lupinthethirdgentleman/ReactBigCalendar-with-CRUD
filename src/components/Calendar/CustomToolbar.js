import React , {Component} from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { convertMonth, convertDay } from "Helpers/helpers";

import { Button, TextField } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import { getEventsSearch } from "Actions";

const divStyle = {
  marginTop: '25px',
  // color: 'blue',
  // backgroundImage: 'url(' + imgUrl + ')',
};

var today = new Date();

const goToToday = () => {
  toolbar.onNavigate("TODAY");
};
const goToBack = () => {
  toolbar.onNavigate("PREV");
};
const goToNext = () => {
  toolbar.onNavigate("NEXT");
};

const viewMonth = () => {
  toolbar.onViewChange("month");
};

const viewWeek = () => {
  toolbar.onViewChange("week");
};

const viewDay = () => {
  toolbar.onViewChange("day");
};


class CalendarToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarView: "week",
      showPop: false,
      component: null,
      x: 0,
      y: 0
    };

    this.filterChange = this.filterChange.bind(this);
  }
 
  filterChange () {
    var filterKey = document.getElementById("outlined-name").value;
    this.props.getEventsSearch(filterKey);
  }

render() {
  return (
    <React.Fragment>
      <div className="toolbar-container mb-10">
        <div className="row justify-content-between">
          <div className="col-md-4 text-left">
            <div>
              <Button variant="outlined" onClick={viewMonth}>
                Month
              </Button>
              <Button variant="outlined" onClick={viewWeek}>
                Week
              </Button>
              <Button variant="outlined" onClick={viewDay}>
                Day
              </Button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-center align-items-center">
              <IconButton
                size="small"
                className="text-muted"
                disableRipple
                onClick={goToBack}
              >
                <NavigateBefore />
              </IconButton>
              <h2
                className="mb-0 mx-20 text-center"
                style={{ minWidth: "30%" }}
              >
                {toolbar.label}
              </h2>
              <IconButton
                size="small"
                className="text-muted"
                disableRipple
                onClick={goToNext}
              >
                <NavigateNext />
              </IconButton>
            </div>
          </div>
          <div className="col-md-4 text-right">
            <div>
              <Button variant="outlined" onClick={goToBack}>
                Back
              </Button>
              <Button variant="outlined" onClick={goToToday}>
                Today
              </Button>
              <Button variant="outlined" onClick={goToNext}>
                Next
              </Button>
            </div>
          </div>

          {<div className="col-md-4"></div>}

          <div className="col-md-4">
            <TextField
              style={divStyle}
              id="outlined-name"
              label="Filter"
              className="filter"
              variant="outlined"
              onKeyUp={this.filterChange}
            />
          </div>


        </div>
      </div>
    </React.Fragment>
  )
  }
}

const mapStateToProps = ({ calendarState }) => {
  const { showEvents } = calendarState;
  return { showEvents };
};

export default connect(
  mapStateToProps,
  {
    getEventsSearch
  }
)(CalendarToolbar);