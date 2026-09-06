import styles from "./Card.module.scss";

export type CardPadding = "none" | "sm" | "md" | "lg";
export type CardVariant = "default" | "outlined" | "surface";
export type CardElevation = "none" | "sm" | "md";
export type CardRadius = "sm" | "md" | "lg";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: CardPadding;
  variant?: CardVariant;
  elevation?: CardElevation;
  radius?: CardRadius;
}

export default function Card({
  padding = "md",
  variant = "default",
  elevation = "sm",
  radius = "lg",
  className,
  children,
  ...props
}: CardProps) {
  function cn(...classes: Array<string | undefined | null | false>) {
    return classes.filter(Boolean).join(" ");
  }

  const cardClassName = cn(
    styles.card,
    styles[`padding-${padding}`],
    styles[`variant-${variant}`],
    styles[`elevation-${elevation}`],
    styles[`radius-${radius}`],
    className,
  );
  return (
    <div className={cardClassName} {...props}>
      {children}
    </div>
  );
}
