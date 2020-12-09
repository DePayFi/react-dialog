import React from 'react';
interface DialogProviderProps {
    closeContainer: () => any;
}
declare class DialogProvider extends React.Component<DialogProviderProps> {
    state: {
        closable: boolean;
    };
    setClosable(closable: boolean): void;
    render(): JSX.Element;
}
export default DialogProvider;
