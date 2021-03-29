import DialogContext from './contexts/DialogContext';
interface renderParamenters {
    container: HTMLElement;
    content: HTMLElement;
}
declare const render: ({ container, content }: renderParamenters) => void;
export { render, DialogContext };
