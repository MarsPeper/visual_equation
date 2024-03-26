import React, { useState } from 'react'
import { addStyles, EditableMathField } from 'react-mathquill'

// inserts the required css to the <head> block.
// you can skip this, if you want to do that by yourself.
addStyles()

const EditableMathExample = () => {
  const [latex, setLatex] = useState('\\frac{d^4G}{8ND^3}=\\ k')

  return (
    <div className="MathQuill-container">
      <div> MathQuill equation editor </div>
      <EditableMathField
        latex={latex}
        onChange={(mathField) => {
          setLatex(mathField.latex())
        }}
      />
      <p>{latex}</p>
    </div>
  )
}
export default EditableMathExample;
