export default async function SignInLayout(props: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto">{props.children}</div>;
}

export const dynamic = 'force-dynamic';
