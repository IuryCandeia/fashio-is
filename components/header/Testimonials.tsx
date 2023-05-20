export interface Props {
  title: string;
  subtitle: string;
}

export default function Testemonials({
  title,
  subtitle,
  // imageUrl = "https://deco.cx/images/deco-logo-light.png",
}: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
    </div>
  );
}
