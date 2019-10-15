import React from "react";

// form components
import FormInput from "Components/Form/Components/FormInput";
import DateTimePicker from "Components/Form/Components/Pickers/DateTimePicker";
import DatePicker from "Components/Form/Components/Pickers/DatePicker";
import { Button, Switch, FormControlLabel } from "@material-ui/core";

function EditableEventInfo(props) {

  const { info, onDelete, editField, toggleEdit, submitEdit } = props;
  const { id, start, end, title, desc, allDay, location, participants } = info;
  return (
    <React.Fragment>
      <h3>Edit Event Details</h3>
      <form autoComplete="off">
        <FormInput
          placeholer="Title"
          value={title}
          target="title"
          handleChange={editField}
          required={!title}
        />
        <div className="row">
          <div className="col">
            {allDay ? (
              <DatePicker
                value={start}
                target="start"
                handleChange={editField}
                required={!start}
              />
            ) : (
              <DateTimePicker
                value={start}
                target="start"
                handleChange={editField}
                required={!start}
              />
            )}
          </div>
          <div className="col">
            {allDay ? (
              <DatePicker
                value={end}
                target="end"
                handleChange={editField}
                required={!end}
              />
            ) : (
              <DateTimePicker
                value={end}
                target="end"
                handleChange={editField}
                required={!end}
              />
            )}
          </div>
        </div>
        <div className="text-right text-muted">
          <FormControlLabel
            control={
              <Switch
                checked={allDay}
                onChange={() => editField("allDay", !allDay)}
                value="allDay"
                disableRipple
              />
            }
            label="All day event"
            labelPlacement="start"
            className="mb-0"
          />
        </div>

        <FormInput
          placeholer="Location"
          value={location}
          target="location"
          handleChange={editField}
        /> 

        <FormInput
          placeholer="Participants"
          value={participants}
          target="participants"
          handleChange={editField}
          multiline
        />

        <FormInput
          placeholer="Description"
          value={desc}
          target="desc"
          handleChange={editField}
          multiline
        />

        <div className="row justify-content-between mt-20">
          <div>
            <Button
              className="text-danger"
              disableRipple
              onClick={() => onDelete(id)}
            >
              Delete
            </Button>
          </div>
          <div>
            <Button disableRipple onClick={toggleEdit}>
              Cancel
            </Button>
            <Button
              variant="contained"
              disableRipple
              className="ml-20 text-white btn-success"
              onClick={submitEdit}
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default EditableEventInfo;
