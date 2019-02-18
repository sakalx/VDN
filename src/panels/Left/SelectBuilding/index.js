import React, {useState, useRef, useEffect} from 'react';
import {findDOMNode} from 'react-dom';

import {connect} from 'react-redux';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


function SelectBuilding({building}) {
  const [labelWidth, setLabelWidth] = useState(0);
  const [buildingId, setBuildingId] = useState('');
  const inputLabelRef = useRef(null);

  useEffect(() => {
    setLabelWidth(findDOMNode(inputLabelRef.current).offsetWidth);
  }, []);

  const handleChange = ({target}) => {
    setBuildingId(target.value);
  };

  return (
    <FormControl variant='outlined'>
      <InputLabel ref={inputLabelRef} htmlFor='building-native-select'>
        Building
      </InputLabel>
      <Select
        native
        value={buildingId}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            id='building-native-select'
          />
        }
      >
        <option value=''/>
        {building.data.map(({ID, NAME}) =>
          <option key={String(ID)} value={ID}>{NAME}</option>
        )}
      </Select>
    </FormControl>
  )
}

const mapStateToProps = ({building}) => ({
  building,
});

export default connect(mapStateToProps, null)(SelectBuilding);