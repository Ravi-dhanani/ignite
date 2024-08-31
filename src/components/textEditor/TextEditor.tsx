"use client";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";

import FroalaEditorComponent from "react-froala-wysiwyg";
import { useMediaQuery } from "usehooks-ts";

type Props = {
  placeholder: string;
  handleChange?: ((event: any) => void) | undefined;
  content?: string;
};

interface EditorEvent {
  type: string;
}

interface Editor {
  getContent: () => string;
}

export const TextEditor = ({ placeholder, content, handleChange }: Props) => {
  const isTablateScreen = useMediaQuery("(max-width:768px)");

  let config = {
    attribution: false,
    placeholderText: placeholder || "Start writing...",
    heightMin: isTablateScreen ? 350 : 500,
    events: {
      contentChanged: function (e: EditorEvent, editor: Editor) {},
    },
  };
  return (
    <>
      <FroalaEditorComponent
        tag="textarea"
        onModelChange={handleChange}
        config={config}
        model={content}
      />
    </>
  );
};
