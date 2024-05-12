import { createBoard } from '@wixc3/react-board';
import { Register } from '../../../components/login/register';

export default createBoard({
    name: 'Register',
    Board: () => <Register />,
    isSnippet: true,
});