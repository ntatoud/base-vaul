import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { GithubInfo } from 'fumadocs-ui/components/github-info';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout {...baseOptions()} githubUrl="https://github.com/ntatoud/base-vaul">
      {children}
    </HomeLayout>
  );
}
