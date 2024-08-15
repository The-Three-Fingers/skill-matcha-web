import { BaseTemplate } from '@/templates/base-template';

export default async function Layout(props: { children: React.ReactNode }) {
  return <BaseTemplate>{props.children}</BaseTemplate>;
}

export const dynamic = 'force-dynamic';
