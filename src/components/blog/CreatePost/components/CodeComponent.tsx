import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface Props {
  codeString: string;
}

export const CodeComponent = ({codeString = 'is empty my guy'}: Props) => {
  return (
    <SyntaxHighlighter language="javascript" style={vs2015} showLineNumbers wrapLongLines>
      {codeString}
    </SyntaxHighlighter>
  );
};
