import React, { useEffect, useRef, useState } from 'react';
import MenuButton from "./menu-button.js";
const ImageButton = props => {
  const {
    editor
  } = props;
  const [image, setImage] = useState();
  const fileInput = useRef(null);
  const handleInputChange = event => {
    const {
      files
    } = event.target;
    if (!files.length) return;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = e => {
      setImage(e.target?.result);
    };
  };
  const handleButtonClick = () => {
    if (fileInput.current) fileInput.current.click();
  };
  useEffect(() => {
    if (image && typeof image === 'string') {
      editor.chain().focus().setImage({
        src: image
      }).run();
    }
  }, [image]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MenuButton, {
    editor: editor,
    key: "image",
    name: "image",
    onClick: handleButtonClick,
    icon: "Image"
  }), /*#__PURE__*/React.createElement("input", {
    type: "file",
    ref: fileInput,
    onChange: handleInputChange,
    style: {
      display: 'none'
    }
  }));
};
export default ImageButton;