
jsx
import React, { useState, useEffect } from 'react';
import marked from 'marked';

function App() {
  const [text, setText] = useState(`
    # Heading
    ## Subheading
    [Link]((#))
    \`Inline Code\`
    \`\`\`
    Code Block
    \`\`\`
    - List Item
    > Blockquote
    ![Image]((#))
    **Bolded Text**
  `);

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked(text);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <h1>Markdown Previewer</h1>
      <textarea id="editor" value={text} onChange={handleChange} />
      <div id="preview"></div>
    </div>
  );
}

export default App;
