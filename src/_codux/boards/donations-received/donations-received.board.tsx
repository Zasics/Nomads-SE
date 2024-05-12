import { createBoard } from '@wixc3/react-board';
import { DonationsReceived } from '../../../components/organization/donations-received';

export default createBoard({
    name: 'DonationsReceived',
    Board: () => <DonationsReceived />,
    isSnippet: true,
});