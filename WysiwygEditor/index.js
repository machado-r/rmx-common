import React, { Component } from 'react';
import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState,
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

class WysiwygEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // editorState: EditorState.createEmpty(),
      editorState: this.setInitialState(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.handleChange(editorState);
    this.setState({
      editorState,
    });
  };

  handleChange = (editorState) => {
    const { setFieldValue, setFieldTouched, field } = this.props;
    const value = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setFieldTouched(field, true, false);
    setFieldValue(field, value);
  };

  setInitialState = () => {
    const { value } = this.props;
    if (value) {
      const blocksFromHTML = convertFromHTML(value);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      return EditorState.createWithContent(state);
    } else {
      return EditorState.createEmpty();
    }
  };

  render() {
    const { editorState } = this.state;

    return (
      <div>
        <Editor
          editorState={editorState}
          // wrapperClassName="demo-wrapper"
          // editorClassName="demo-teste"
          localization={{ locale: 'pt' }}
          onEditorStateChange={this.onEditorStateChange}
          editorStyle={{
            color: 'rgba(0, 0, 0, 0.87)',
            cursor: 'text',
            fontSize: '1rem',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: '1.1875em',
            alignItems: 'center',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderRadius: '4px',
            borderColor: 'rgba(0, 0, 0, 0.23)',
            paddingLeft: '1em',
            paddingRight: '1em',
            margin: '0',
          }}
          toolbar={{
            options: [
              'inline',
              'blockType',
              'fontSize',
              'list',
              'textAlign',
              'colorPicker',
              'link',
              'remove',
              'history',
            ],
          }}
        />
      </div>
    );
  }
}

export default WysiwygEditor;
