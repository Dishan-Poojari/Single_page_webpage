import React from 'react';

export default function Gender() {
  return (
    <div>
      <h4>Gender</h4>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label className="form-check-label" for="flexRadioDefault1">
          MALE
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
        <label className="form-check-label" for="flexRadioDefault2">
          FEMALE
        </label>
      </div>

    </div>
  );
}
