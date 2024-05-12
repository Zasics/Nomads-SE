import { createBoard } from '@wixc3/react-board';
import { CreatePost } from '../../../components/organization/create-post';

export default createBoard({
    name: 'CreatePost',
    Board: () => <CreatePost />,
    isSnippet: true,
});