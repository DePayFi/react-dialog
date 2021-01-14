import DialogContext from './contexts/DialogContext';
interface renderParamenters {
    document: Document;
    content: HTMLElement;
    styles?: string;
}
declare const render: ({ document, content, styles }: renderParamenters) => void;
export { render, DialogContext };
