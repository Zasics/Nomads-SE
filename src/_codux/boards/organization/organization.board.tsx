import { createBoard } from '@wixc3/react-board';
import { Organization } from '../../../components/organization/organization';

export default createBoard({
    name: 'Organization',
    Board: () => <Organization />,
    isSnippet: true,
});