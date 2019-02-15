import React from 'react';

import millisToMinutesAndSeconds from '../../utils/millisToMinutesAndSeconds';

export default function (info) {
  return info.map(({prop, name}, index) => (
      <span
        key={String(index)}
        className='alertItem'
      >
          {
            (prop === 'duration')
              ? `${millisToMinutesAndSeconds(name)}min.`
              : name
          }
        </span>
    )
  )
}