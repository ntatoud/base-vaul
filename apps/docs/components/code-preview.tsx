import { highlight } from '@/lib/highlight-code';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import fs from 'node:fs/promises';
import { format } from 'prettier';
interface CodePreviewProps {
  filePath: string;
  component: React.ReactNode;
}
export async function CodePreview({ filePath, component }: CodePreviewProps) {
  const demoFilePath = process.cwd() + filePath;
  const demoFile = await fs.readFile(demoFilePath, 'utf8');
  const formattedCode = await format(demoFile, {
    parser: 'typescript',
  });

  const highlighted = await highlight(formattedCode, 'tsx');

  return (
    <Tabs items={['Preview', 'Code']}>
      <Tab value="Preview">{component}</Tab>
      <Tab value="Code">
        <CodeBlock>
          <Pre dangerouslySetInnerHTML={{ __html: highlighted }} />
        </CodeBlock>
      </Tab>
    </Tabs>
  );
}
