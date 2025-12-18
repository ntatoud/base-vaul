import { highlight } from '@/lib/highlight-code';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import fs from 'node:fs/promises';
import { format } from 'prettier';

export async function CodeSource({ filePath }: { filePath: string }) {
  const demoFilePath = process.cwd() + filePath;
  const demoFile = await fs.readFile(demoFilePath, 'utf8');
  const formattedCode = await format(demoFile, {
    parser: 'typescript',
  });

  const highlighted = await highlight(formattedCode, 'tsx');

  return (
    <CodeBlock className="max-h-[500px]">
      <Pre dangerouslySetInnerHTML={{ __html: highlighted }} className="scroll-mb-20 mb-20" />
    </CodeBlock>
  );
}
