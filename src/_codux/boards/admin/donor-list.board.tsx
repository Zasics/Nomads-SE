import { createBoard } from '@wixc3/react-board';
import { Admin } from '../../../components/admin/view-donors';

export default createBoard({
    name: 'Donor List',
    Board: () => (
        <div>
            <Admin />
        </div>
    ),
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
});
