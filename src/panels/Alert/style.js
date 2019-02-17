import styled, {css} from 'styled-components'

import TableRow from '@material-ui/core/TableRow';

const activeBackgroundColor = '#e22b29';
const selectedBackgroundColor = '#48cc92';

export const Row = styled(TableRow)`
  cursor: pointer;
   :hover {
    opacity: .9;
  }
  ${({status}) => status && css`
    ${status === 'active' && `background: ${activeBackgroundColor};`}
    ${status === 'selected' && `background: ${selectedBackgroundColor};`}
  `}
`;
