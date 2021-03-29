import React from 'react';
interface DialogProps {
    content: React.ReactNode;
}
interface DialogState {
    open: boolean;
}
declare class Dialog extends React.Component<DialogProps, DialogState> {
    state: {
        open: boolean;
    };
    componentDidMount(): void;
    render(): React.ReactNode;
}
export default Dialog;
