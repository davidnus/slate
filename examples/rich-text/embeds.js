
import { Editor } from 'slate-react'
import { Value } from 'slate'

import React from 'react'
import Video from '../embeds/video'

/**
 * Deserialize the initial editor value.
 *
 * @type {Object}
 */

//const initialValue = Value.fromJSON(initialValueAsJson)

/**
 * The images example.
 *
 * @type {Component}
 */

function Embeds (){
  /**
   * The editor's schema.
   *
   * @type {Object}
   */

  const schema = {
    blocks: {
      video: {
        isVoid: true,
      },
    },
  }

  /**
   * Render the app.
   *
   * @return {Element} element
   */
    /*
  render() {
    return (
      <Editor
        placeholder="Enter some text..."
        defaultValue={initialValue}
        schema={this.schema}
        renderNode={this.renderNode}
      />
    )
  }
  */

  /**
   * Render a Slate node.
   *
   * @param {Object} props
   * @param {Editor} editor
   * @param {Function} next
   */

  const renderNode = (props, editor, next) => {
    switch (props.node.type) {
      case 'video':
        return <Video {...props} />
      default:
        return next()
    }
  }

  return{
    schema,
    renderNode,
  }
}

/**
 * Export.
 */

export default Embeds
