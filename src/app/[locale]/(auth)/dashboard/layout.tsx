import { LogOutButton } from '@/components/logout-button';
import { BaseTemplate } from '@/templates/base-template';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return (
    <BaseTemplate rightNav={<LogOutButton />}>{props.children}</BaseTemplate>
  );
}

export const dynamic = 'force-dynamic';
