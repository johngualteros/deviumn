import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const codeString = `
  function saludar() {
    console.log('¡Hola, mundo!');
  }
`;

export const CodeComponent = () => {
  return (
    <SyntaxHighlighter language="javascript" style={vs2015} showLineNumbers wrapLongLines>
      {codeString}
    </SyntaxHighlighter>
  );
};
