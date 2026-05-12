/**
 * RichTextEditor — A React 19 + Strict Mode-safe Quill wrapper.
 *
 * Uses a dedicated inner div for Quill to render into, and properly
 * tears down DOM nodes in the cleanup so React's double-effect (Strict Mode)
 * doesn't produce a duplicate toolbar.
 */
import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

interface RichTextEditorProps {
    value: string;
    onChange: (html: string) => void;
    placeholder?: string;
    minHeight?: number;
}

const TOOLBAR_OPTIONS = [
    [{ header: [2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'blockquote'],
    ['clean'],
];

const RichTextEditor: React.FC<RichTextEditorProps> = ({
    value,
    onChange,
    placeholder = 'Start writing...',
    minHeight = 180,
}) => {
    // wrapperRef  — outer div we control (never touched by Quill)
    // editorRef   — inner div that Quill hijacks to render toolbar + editor
    const wrapperRef   = useRef<HTMLDivElement>(null);
    const editorRef    = useRef<HTMLDivElement>(null);
    const quillRef     = useRef<Quill | null>(null);
    const lastValueRef = useRef<string>(value);
    const onChangeRef  = useRef(onChange);

    // Keep onChange ref fresh so we never need it as an effect dependency
    useEffect(() => {
        onChangeRef.current = onChange;
    });

    // ── Initialize Quill once; properly teardown for Strict Mode ─────────────
    useEffect(() => {
        const el = editorRef.current;
        if (!el) return;

        const quill = new Quill(el, {
            theme:       'snow',
            placeholder,
            modules:     { toolbar: TOOLBAR_OPTIONS },
        });

        quillRef.current = quill;

        // Set initial HTML content without triggering the text-change handler
        if (value) {
            quill.clipboard.dangerouslyPasteHTML(value);
            lastValueRef.current = value;
        }

        quill.on('text-change', () => {
            const html = el.querySelector('.ql-editor')?.innerHTML ?? '';
            lastValueRef.current = html;
            onChangeRef.current(html);
        });

        // ── Cleanup: remove everything Quill injected so the next mount is clean
        return () => {
            quill.off('text-change');

            // Remove the toolbar Quill prepended to the container
            wrapperRef.current
                ?.querySelector('.ql-toolbar')
                ?.remove();

            // Reset the editor div so Quill can re-initialise from scratch
            el.className = '';
            el.innerHTML = '';

            quillRef.current = null;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // ── Sync value when the parent changes it programmatically ────────────────
    useEffect(() => {
        const quill = quillRef.current;
        if (!quill || value === lastValueRef.current) return;

        const sel = quill.getSelection();
        quill.clipboard.dangerouslyPasteHTML(value);
        lastValueRef.current = value;
        if (sel) quill.setSelection(sel);
    }, [value]);

    return (
        // wrapperRef wraps both the Quill-generated toolbar and editor
        <div ref={wrapperRef} style={{ minHeight }}>
            {/* Quill will prepend its toolbar here and transform this div */}
            <div ref={editorRef} />
        </div>
    );
};

export default RichTextEditor;
