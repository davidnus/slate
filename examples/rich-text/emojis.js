import { Editor } from 'slate-react'
import { Value } from 'slate'

import React from 'react'
import styled from 'react-emotion'
import { Button, Icon, Toolbar } from '../components'

/**
 * Deserialize the initial editor value.
 *
 * @type {Object}
 */

//const initialValue = Value.fromJSON(initialValueAsJson)

/**
 * A styled emoji inline component.
 *
 * @type {Component}
 */

const Emoji = styled('span')`
  outline: ${props => (props.selected ? '2px solid blue' : 'none')};
`

/**
 * Emojis.
 *
 * @type {Array}
 */

const EMOJIS = [
  '😃',
  '😬',
  '😂',
  '😅',
  '😆',
  '😍',
  '😱',
  '👋',
  '👏',
  '👍',
  '🙌',
  '👌',
  '🙏',
  '👻',
  '🍔',
  '🍑',
  '🔑',
]

/**
 * No ops.
 *
 * @type {Function}
 */

const noop = e => e.preventDefault()

/**
 * The links example.
 *
 * @type {Component}
 */

//class Emojis extends React.Component {
function Emojis(){
  //var editor;

  const onConstruct = (editor, next) => {
    //editor= editor;
    return next();
  }
  /**
   * The editor's schema.
   *
   * @type {Object}
   */

  const schema = {
    inlines: {
      emoji: {
        isVoid: true,
      },
    },
  }

  /**
   * Store a reference to the `editor`.
   *
   * @param {Editor} editor
   */
    /*
  ref = editor => {
    this.editor = editor
  }
  */

  /**
   * Render the app.
   *
   * @return {Element} element
   */

    /*
  render() {
    return (
      <div>
        <Toolbar>
          {EMOJIS.map((emoji, i) => (
            <Button key={i} onMouseDown={e => this.onClickEmoji(e, emoji)}>
              <Icon>{emoji}</Icon>
            </Button>
          ))}
        </Toolbar>
        <Editor
          placeholder="Write some 😍👋🎉..."
          ref={this.ref}
          defaultValue={initialValue}
          schema={this.schema}
          renderNode={this.renderNode}
        />
      </div>
    )
  }
  */

  /**
   * Render a Slate node.
   *
   * @param {Object} props
   * @param {Editor} editor
   * @param {Function} next
   * @return {Element}
   */

  const renderNode = (props, editor, next) => {
    const { attributes, children, node, isFocused } = props

    switch (node.type) {
      case 'paragraph': {
        return <p {...attributes}>{children}</p>
      }

      case 'emoji': {
        const code = node.data.get('code')
        return (
          <Emoji
            {...props.attributes}
            selected={isFocused}
            contentEditable={false}
            onDrop={noop}
          >
            {code}
          </Emoji>
        )
      }

      default: {
        return next()
      }
    }
  }


  /**
   * When clicking a emoji, insert it
   *
   * @param {Event} e
   */

  const onClickEmoji = (e, code,editor) => {
    e.preventDefault()

    editor
      .insertInline({ type: 'emoji', data: { code } })
      .moveToStartOfNextText()
      .focus()
  }

  const renderToolbar = (editor) => {
    return (
        EMOJIS.map((emoji, i) => (
            <Button key={i} onMouseDown={e => onClickEmoji(e, emoji, editor)}>
              <Icon>{emoji}</Icon>
            </Button>
    ))
    )
  }

  return {
    plugin: {
      renderNode,
      onConstruct
    },
    renderToolbar
  }
}

/**
 * Export.
 */

export default Emojis
