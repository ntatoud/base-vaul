import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { GithubInfo } from 'fumadocs-ui/components/github-info';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      links={[
        {
          type: 'custom',
          children: <GithubInfo owner="ntatoud" repo="base-vaul" className="lg:-mx-2" />,
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
