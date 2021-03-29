import DialogContext from './contexts/DialogContext';
interface renderParamenters {
    container: HTMLElement;
    content: HTMLElement;
}
declare const renderDialog: ({ container, content }: renderParamenters) => void;
export { renderDialog, DialogContext };
