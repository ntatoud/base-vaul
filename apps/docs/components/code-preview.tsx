import { CodeSource } from '@/components/code-source';

import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

interface CodePreviewProps {
  filePath: string;
  component: React.ReactNode;
}
export async function CodePreview({ filePath, component }: CodePreviewProps) {
  return (
    <Tabs items={['Preview', 'Code']}>
      <Tab value="Preview">{component}</Tab>
      <Tab value="Code">
        <CodeSource filePath={filePath} />
      </Tab>
    </Tabs>
  );
}
