import { createBoard } from '@wixc3/react-board';
import { ManagePosts } from '../../../components/organization/manage-posts';

export default createBoard({
    name: 'ManagePosts',
    Board: () => <ManagePosts />,
    isSnippet: true,
});